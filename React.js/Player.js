function Player({ song }) {
  if (!song) return <div style={{ padding: 20 }}>Pilih lagu untuk diputar...</div>;

  return (
    <div style={{ padding: 20, width: "70%" }}>
      <h2>Sedang Diputar</h2>
      <img src={song.cover} width="200" /><br />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      
      <audio controls autoPlay style={{ width: "100%" }}>
        <source src={song.url} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Player;

