import React, { useEffect } from "react";
import FoodCard from "./FoodCard";
import './MenuBox.css';
import SearchBar from "./SearchBar";
import {useState} from 'react';

function MenuBox() {

    const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text); // Update the state with the search text
  };


  return (
    <>
      <div className="outerbox">
        <section className="category-section">
          <div className="category-card" >
            <a href="#today">Recommended</a>
          </div>
          <div className="category-card">
            Popular
          </div>
        </section>
        
        <section className="FoodLister">
        <SearchBar onSearchChange={handleSearchChange}/>
            <h1 id="today">{searchText}</h1>
          <FoodCard />
          <h1 id="recom">Recommended</h1>
          <FoodCard />
          <h1 id="">End</h1>
        </section>
      
      </div>
    </>
  );
}

export default MenuBox;
