import React from 'react';
import './Searchbar.css';
import { useState } from 'react';

export default function SearchBar({ onSearchChange })
{

    const [searchText, setSearchText] = useState(''); // State to store the text from the search bar

  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text); // Update the state with the text from the search bar
    onSearchChange(text); // Call the callback function passed from the parent
  };

return (<>

<div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </div>
      




    </>
    );
}