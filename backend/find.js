const fs = require("fs/promises");
const path = require("path");

const FILES_TO_SCAN = [
  "/data/p0.json",
  "/data/p1.json",
  "/data/p2.json",
  "/data/p3.json",
  "/data/p4.json",
  "/data/p5.json",
  "/data/p6.json",
  "/data/p7.json",
  "/data/p8.json",
  "/data/p9.json",
  "/data/p10.json",
  "/data/p11.json",
  "/data/p12.json",
  "/data/p13.json",
];

async function findByEncoder(encoder) {
  try {
    const result = [];
    for (const file of FILES_TO_SCAN) {
      const data = await fs.readFile(path.join(__dirname, file), "utf8");
      const songs = JSON.parse(data);
      for (let song of songs) {
        song = song.split(" // ");
        if (
          song[song.length - 1].toLowerCase().includes(encoder.toLowerCase())
        ) {
          result.push(song);
        }
      }
    }
    return result;
  } catch (err) {
    console.log(err);
    return ["ERROR"];
  }
}

async function findByPhrase(phrase) {
  try {
    const result = [];
    for (const file of FILES_TO_SCAN) {
      const data = await fs.readFile(path.join(__dirname, file), "utf8");
      const songs = JSON.parse(data);
      for (const song of songs) {
        if (song.toLowerCase().includes(phrase.toLowerCase())) {
          result.push(song.split(" // "));
        }
      }
    }
    return result;
  } catch (err) {
    console.log(err);
    return ["ERROR"];
  }
}

module.exports = { findByEncoder, findByPhrase };
