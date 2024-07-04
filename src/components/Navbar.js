import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ search, setSearch, fetchTracks }) {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTracks();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="45" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
  <path fill-rule="evenodd" d="M12 3v10h-1V3z"/>
  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
  <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
</svg>
        <Link className="navbar-brand" to="/">MusicApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/liked">Liked Songs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/playlists">Playlists</Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={handleSearch} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
