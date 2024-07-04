import React from 'react';

function TrackList({ tracks, toggleLikeTrack, likedTracks, addTrackToPlaylist, playlists }) {
  const handleAddToPlaylist = (track, playlistName) => {
    addTrackToPlaylist(track, playlistName);
  };

  return (
    <div className="container mt-4">
      {tracks.length === 0 ? (
        <div className="text-center">
          <p>No tracks found. Please search for some music!</p>
          <img  style={{marginTop:"3em", height:"25vh"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHT5SrWTWolFavTnpJxs7unGGsN24kQ3b7meKqOMhjwex037f-Tle2yjlCI25ub_Ld-Bk&usqp=CAU"/>
        </div>
      ) : (
        <div className="row">
          {tracks.map(track => (
            <div className="col-md-4 mb-4" key={track.id}>
              <div className="card">
                <img src={track.album.images[0].url} className="card-img-top" alt={track.name} />
                <div className="card-body">
                  <h5 className="card-title">{track.name}</h5>
                  <p className="card-text">Artist: {track.album.artists[0].name}</p>
                  <p className="card-text">Release date: {track.album.release_date}</p>
                  <audio src={track.preview_url} controls className="w-100"></audio>
                  <button
                    className="btn btn-success mt-2 ms-2"
                    onClick={() => window.open(track.external_urls.spotify, '_blank')}
                  >
                    Download ringtone
                  </button>
                  <button
                    className="btn btn-danger mt-2 ms-2"
                    onClick={() => toggleLikeTrack(track)}
                  >
                    {likedTracks.some((t) => t.id === track.id) ? 'Unlike' : 'Like'}
                  </button>
                  <div className="dropdown mt-2">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Add to Playlist
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {playlists.map((playlist, index) => (
                        <li key={index}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleAddToPlaylist(track, playlist.name)}
                          >
                            {playlist.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrackList;
