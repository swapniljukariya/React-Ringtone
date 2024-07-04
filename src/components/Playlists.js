import React from 'react';

function Playlists({ playlists ,createPlaylist, setPlaylistName,playlistName}) {
  return (
    <div className="container mt-4">
      {playlists.map((playlist, index) => (
        <div key={index}>
          <h3>{playlist.name}</h3>
          <div className="row">
            {playlist.tracks.map(track => (
              <div className="col-md-4 mb-4" key={track.id}>
                <div className="card">
                  <img src={track.album.images[0].url} className="card-img-top" alt={track.name} />
                  <div className="card-body">
                    <h5 className="card-title">{track.name}</h5>
                    <p className="card-text">Artist: {track.album.artists[0].name}</p>
                    <p className="card-text">Release date: {track.album.release_date}</p>
                    <audio src={track.preview_url} controls className="w-100"></audio>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="playlist">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter playlist name"
                  value={playlistName}
                  onChange={(e) => setPlaylistName(e.target.value)}
                />
                <button className="btn btn-primary mt-2" onClick={createPlaylist}>
                  Create Playlist
                </button>
              </div>
    </div>
  );
}

export default Playlists;
