const express = require("express");
const cors = require("cors");
const app = express();
const songs = require("./songs.json");

app.use(cors());
app.use(express.json());

// endpoint ambil lagu
app.get("/api/songs", (req, res) => {
  res.json(songs);
});

// file statis (mp3 & cover)
app.use("/music", express.static("music"));
app.use("/cover", express.static("cover"));

app.listen(3001, () => console.log("Backend berjalan di http://localhost:3001"));

