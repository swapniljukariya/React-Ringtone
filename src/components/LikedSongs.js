import React from 'react';
import TrackList from './TrackList';

function LikedSongs({ likedTracks }) {
  return (
    <div>
      <h2>Liked Songs</h2>
      <TrackList tracks={likedTracks} toggleLikeTrack={() => {}} likedTracks={likedTracks} />
    </div>
  );
}

export default LikedSongs;
