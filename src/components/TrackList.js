import React from 'react';

function TrackList({ tracks }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {tracks.map(track => (
          <div className="col-md-4 mb-4" key={track.id}>
            <div className="card">
              <img src={track.album.images[0].url} className="card-img-top" alt={track.name} />
              <div className="card-body">
                <h5 className="card-title">{track.name}</h5>
                <p className="card-text">Artist: {track.album.artists[0].name}</p>
                <p className="card-text">
            Release date: {track.album.release_date}
          </p>
                <audio src={track.preview_url} controls className="w-100"></audio>
                <button
                  className="btn btn-success mt-2 ms-2"
                  onClick={() => window.open(track.external_urls.spotify, '_blank')}
                >
                  Download ringtone
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackList;
