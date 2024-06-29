import React from 'react';

function Navbar({ search, setSearch, fetchTracks }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchTracks();
  };

  return (
    <nav className="navbar">
        <div>
            <h2>React-Ringtones</h2>
        </div>
        <form onSubmit={handleSearchSubmit}>
            <input
            type="search"
            value={search}
            placeholder='Search the ringtone'
            onChange={handleSearchChange}
            className="input-text"/>
            <button className='btnn' > search</button>
        </form>
      
    </nav>
  );
}

export default Navbar;
