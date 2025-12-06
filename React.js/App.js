import React, { useEffect, useState } from "react";
import SongList from "./SongList";
import Player from "./Player";

function App() {
  const [songs, setSongs] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/songs")
      .then(res => res.json())
      .then(data => setSongs(data));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SongList songs={songs} onSelect={setCurrent} />
      <Player song={current} />
    </div>
  );
}

export default App;

