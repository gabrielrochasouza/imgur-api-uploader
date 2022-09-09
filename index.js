const express = require("express");
const fileUpload = require("express-fileupload");
const { createReadStream } = require("fs");
const { ImgurClient } = require("imgur");

require("dotenv").config();

const app = express();

const port = 4000;

const client = new ImgurClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
app.use(fileUpload());
app.use(express.json());


app.get("/",(req,res)=>res.send("App rodando"))

app.post("/upload/", async (req, res) => {

  try{
    if (!req.files)
      return res.status(400).json({ message: "No files were uploaded" });
  
    let sampleFile = req.files.sampleFile;
    let uploadPath = "./upload/" + sampleFile.name;
    sampleFile.mv(uploadPath, (err) => {
      if (err) return res.status(500).json({ message: err });
    });
    const response = await client.upload({
      image: createReadStream(uploadPath),
      type: "stream",
    });
    return res.status(200).json({ image_url: response.data.link });

  }catch(err){
      if(!req.files?.name) res.status(500).json({ message: "error" });
  }
});

app.listen(port, () =>
  console.log(`App rodando na porta em http://localhost:${port}/`)
);
