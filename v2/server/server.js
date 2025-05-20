// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post("/analyze", async (req, res) => {
//   try {
//     const openaiRes = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-4o",
//         messages: [
//           {
//             role: "user",
//             content: "Say hello from the server!",
//           },
//         ],
//         max_tokens: 50,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const result = openaiRes.data.choices[0].message.content;
//     res.json({ result });
//   } catch (err) {
//     console.error("Error calling OpenAI:", err.response?.data || err.message);
//     res.status(500).json({ error: "Failed to get response from OpenAI." });
//   }
// });

// app.listen(5001, () => console.log("Server listening on port 5001"));

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/analyze", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;
    const imageData = fs.readFileSync(imagePath);
    const base64Image = imageData.toString("base64");

    // Remove temp file
    fs.unlinkSync(imagePath);

    const openaiRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Describe the image.",
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:${req.file.mimetype};base64,${base64Image}`,
                },
              },
            ],
          },
        ],
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = openaiRes.data.choices[0].message.content;
    res.json({ result });
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Image analysis failed." });
  }
});

app.listen(5001, () => console.log("Server listening on port 5001"));
