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


const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Create the uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Serve static files from the uploads directory
app.use('/images', express.static(uploadDir));

// Upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).send('No file uploaded.');

  // Return the public URL for the image
  const imageUrl = `http://localhost:${PORT}/images/${file.filename}`;
  res.send({ imageUrl });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});