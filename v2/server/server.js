const express = require("express");
const cors = require("cors");
const axios = require("axios");
const multer = require("multer");
const fs = require("fs");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 👇 Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

const upload = multer({ dest: "uploads/" });

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post("/analyze", upload.single("image"), async (req, res) => {
  try {
    const fileName = req.file.filename;
    const imagePath = req.file.path;
    const imageData = fs.readFileSync(imagePath);
    const base64Image = imageData.toString("base64");

    const openaiRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "Please classify this clothing image." },
              {
                type: "image_url",
                image_url: {
                  url: `data:${req.file.mimetype};base64,${base64Image}`,
                },
              },
            ],
          },
        ],
        functions: [
          {
            name: "classify_clothing",
            description: "Returns clothing classification data",
            parameters: {
              type: "object",
              properties: {
                formality: {
                  type: "string",
                  enum: ["formal", "business casual", "casual", "athleisure", "streetwear"]
                },
                temperature: {
                  type: "string",
                  enum: ["summer", "winter", "transitional"]
                },
                brand: {
                  type: "string",
                },
                colors: {
                  type: "array",
                  items: {
                    type: "string",
                    enum: [
                      "black", "white", "grey", "silver", "gold", "purple", "brown",
                      "tan", "green", "orange", "pink", "maroon", "yellow", "multicolor", "N/A"
                    ]
                  }
                },
                description: {
                  type: "object",
                  properties: {
                    type: { type: "string" },/* enum: ["hat", "jacket", "shirt", "pants", "shoes"],*/
                    style: { type: "string" },
                    fit: { type: "string" },
                    material: { type: "string" },
                    intended_use: { type: "string" },
                    features: {
                      type: "array",
                      items: { type: "string" }
                    },
                    anything_else: { type: "string" }
                  },
                  required: [
                    "type", "style", "fit", "material",
                    "intended_use", "features", "anything_else"
                  ]
                }
              },
              required: ["formality", "temperature", "colors", "description", "brand"]
            }
          }
        ],
        function_call: { name: "classify_clothing" },
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const funcCall = openaiRes.data.choices[0].message.function_call;
    const jsonResult = JSON.parse(funcCall.arguments);
    console.log("jsonResult: ", jsonResult);

    // Save result to DB
    const connection = await pool.getConnection();
    try {
      const sql = `
        INSERT INTO clothing 
          (formality, temperature, colors, description_type, description_style, description_fit, description_material, description_intended_use, description_features, description_anything_else, file_name, brand)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      await connection.execute(sql, [
        jsonResult.formality,
        jsonResult.temperature,
        JSON.stringify(jsonResult.colors),
        jsonResult.description.type,
        jsonResult.description.style,
        jsonResult.description.fit,
        jsonResult.description.material,
        jsonResult.description.intended_use,
        JSON.stringify(jsonResult.description.features),
        jsonResult.description.anything_else,
        fileName,
        jsonResult.brand
      ]);
    } finally {
      connection.release();
    }

    // 👇 Return file name with result
    res.json({ result: { ...jsonResult, file_name: fileName } });
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Image analysis failed." });
  }
});

 app.post("/match-outfit", async (req, res) => {
  const userPrompt = req.body.prompt;

  try {
    const connection = await pool.getConnection();
    const [clothes] = await connection.query("SELECT * FROM clothing");

    connection.release();

    const groupedItems = {
      hat: [],
      jacket: [],
      shirt: [],
      pants: [],
      shoes: [],
    };

    for (const item of clothes) {
      const type = item.description_type?.toLowerCase();
      if (groupedItems[type]) {
        groupedItems[type].push({
          id: item.id,
          file_name: item.file_name,
          formality: item.formality,
          temperature: item.temperature,
          brand: item.brand,
          colors: item.colors,
          description: {
            style: item.description_style,
            fit: item.description_fit,
            material: item.description_material,
            intended_use: item.description_intended_use,
            features: item.description_features,
            anything_else: item.description_anything_else,
          },
          image_url: `http://localhost:5001/uploads/${item.file_name}`,
        });
      }
    }

    const functions = [
      {
        name: "selectOutfitMatches",
        description: "Select exactly 3 items per clothing category based on the outfit request.",
        parameters: {
          type: "object",
          properties: {
            hat: {
              type: "array",
              minItems: 3,
              maxItems: 3,
              items: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  image_url: { type: "string" },
                  reason: { type: "string" },
                },
                required: ["id", "image_url", "reason"],
              },
            },
            jacket: {
              type: "array",
              minItems: 3,
              maxItems: 3,
              items: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  image_url: { type: "string" },
                  reason: { type: "string" },
                },
                required: ["id", "image_url", "reason"],
              },
            },
            shirt: {
              type: "array",
              minItems: 3,
              maxItems: 3,
              items: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  image_url: { type: "string" },
                  reason: { type: "string" },
                },
                required: ["id", "image_url", "reason"],
              },
            },
            pants: {
              type: "array",
              minItems: 3,
              maxItems: 3,
              items: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  image_url: { type: "string" },
                  reason: { type: "string" },
                },
                required: ["id", "image_url", "reason"],
              },
            },
            shoes: {
              type: "array",
              minItems: 3,
              maxItems: 3,
              items: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  image_url: { type: "string" },
                  reason: { type: "string" },
                },
                required: ["id", "image_url", "reason"],
              },
            },
          },
          required: ["hat", "jacket", "shirt", "pants", "shoes"],
        },
      },
    ];
    console.log("Grouped items:", JSON.stringify(groupedItems, null, 2));
    const gptRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            
              role: "system",
              content: "You are a helpful AI stylist that selects up to **three** clothing items per category (hat, jacket, shirt, pants, shoes) based on the user's request and wardrobe.",
            
          },
          {
            role: "user",
            content: `User request: "${userPrompt}". Wardrobe:\n${JSON.stringify(groupedItems)}`,
          },
        ],
        functions,
        function_call: { name: "selectOutfitMatches" },
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("calvin's a goober")
    console.log("gpt response: ", gptRes.data.choices[0].message)
    const message = gptRes.data.choices[0].message;

    if (message.function_call) {
      console.log("tiddys")
      const args = JSON.parse(message.function_call.arguments);
      console.log("parsed ting: ", args)
      return res.json({ matches: args });
    } else {
      return res.status(500).json({ error: "No function call returned." });
    }
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to match outfit." });
  }
 });


app.listen(5001, () => console.log("Server listening on port 5001"));
