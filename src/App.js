import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import TrackList from './components/TrackList';
import LikedSongs from './components/LikedSongs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaGithub } from 'react-icons/fa';

function App() {
  const [search, setSearch] = useState('');
  const [tracks, setTracks] = useState([]);
  const [likedTracks, setLikedTracks] = useState([]);

  const fetchTracks = async () => {
    try {
      const response = await axios.get(`https://v1.nocodeapi.com/swapniljukariya199/spotify/mmeLlSosRTgUuwHV/search?q=${search}&type=track`);
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error('Error fetching data from Spotify API', error);
    }
  };

  const toggleLikeTrack = (track) => {
    setLikedTracks((prevLikedTracks) =>
      prevLikedTracks.some((t) => t.id === track.id)
        ? prevLikedTracks.filter((t) => t.id !== track.id)
        : [...prevLikedTracks, track]
    );
  };

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} fetchTracks={fetchTracks} />
      <Routes>
        <Route
          path="/"
          element={<TrackList tracks={tracks} toggleLikeTrack={toggleLikeTrack} likedTracks={likedTracks} />}
        />
        <Route
          path="/liked"
          element={<LikedSongs likedTracks={likedTracks} />}
        />
      </Routes>
      <footer>
        <p>Search any Music Track  within seconds</p>
       <h5> © Swapnil Jukariya</h5>
       <div className="App">
      <a href="https://github.com/your-username" className="github-link" target="_blank" rel="noopener noreferrer">
        <FaGithub className="github-icon" />
      </a>
    </div>
      </footer>
    </div>
  );
}

export default App;
