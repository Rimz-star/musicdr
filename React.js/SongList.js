function SongList({ songs, onSelect }) {
  return (
    <div style={{ width: "30%", padding: 20 }}>
      <h2>Daftar Lagu</h2>
      {songs.map(song => (
        <div 
          key={song.id}
          style={{ 
            marginBottom: 15, 
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}
          onClick={() => onSelect(song)}
        >
          <img src={song.cover} width="60" style={{ marginRight: 10 }} />
          <div>
            <b>{song.title}</b><br />
            <span>{song.artist}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;

