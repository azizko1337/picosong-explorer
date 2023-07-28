import express from "express";
import cors from "cors";
import config from "./config.js";
import searchByName from "./controller/searchByName.js";
import searchByEncoder from "./controller/searchByEncoder.js";

const app = express();

app.use("/searchByName", cors(config.corsOptions), async (req, res) => {
  try {
    const { name } = req.query;
    const songs = await searchByName(name);
    res.status(200).json({ songs });
  } catch (err) {
    res.status(500).json({ songs: [] });
  }
});

app.use("/searchByEncoder", cors(config.corsOptions), async (req, res) => {
  try {
    const { encoder } = req.query;
    const songs = await searchByEncoder(encoder);
    res.status(200).json({ songs });
  } catch (err) {
    res.status(500).json({ songs: [] });
  }
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}.`);
});
