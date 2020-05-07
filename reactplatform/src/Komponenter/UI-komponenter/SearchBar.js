import React from 'react';
import './components.css';


function SearchBar() {
  return (
    <div>
      <form class="form-inline active-cyan-3 active-cyan-4">
        <i class="fas fa-search" aria-hidden="true"></i>
        <input
          class="form-control form-control-sm w-40"
          type="text"
          placeholder="Sök"
          aria-label="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
