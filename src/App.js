import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import TrackList from './components/TrackList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [tracks, setTracks] = useState([]);

  const fetchTracks = async () => {
    try {
      const response = await axios.get(`https://v1.nocodeapi.com/swapniljukariya199/spotify/mmeLlSosRTgUuwHV/search?q=${search}&type=track`);
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error('Error fetching data from Spotify API', error);
    }
  };

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} fetchTracks={fetchTracks} />
      <TrackList tracks={tracks} />
    </div>
  );
}

export default App;
