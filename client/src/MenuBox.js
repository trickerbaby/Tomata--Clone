import React, { useEffect } from "react";
import FoodCard from "./FoodCard";
import './MenuBox.css';
import SearchBar from "./SearchBar";
import {useState} from 'react';


function MenuBox() {

    const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    const trimmed = text.trim();
    setSearchText(trimmed); // Update the state with the search text
  };

  const data = [{title:'Fiery jalapeno and peprica',src:'https://b.zmtcdn.com/data/dish_photos/e4e/825cf2e2e5851112830ac5beb5f1fe4e.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',prize:'149',des:'A super spicy veg pizza'},
              {title:'Peppy Paneer Pizza',src:'https://b.zmtcdn.com/data/dish_photos/97c/81fbe5f6e8576cc7bdae699c3900197c.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',prize:'215',des:'A very good paneer pizza loaded with paneer cubes'},
              {title:'Veggy paradise Pizza',src:'https://b.zmtcdn.com/data/dish_photos/131/d256f07dc0da10e511f6442ee0886131.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',prize:'315',des:'A veggy pizza filles with Vegetables like capsicum, onions,Black Pappers , Olives etc'}]
  

              const filteredData = data.filter((item) => {
                // Convert both the name and description to lowercase for case-insensitive search
                const lowerCaseSearchText = searchText.toLowerCase();
                const lowerCaseName = item.title.toLowerCase();
                const lowerCaseDescription = item.des.toLowerCase();
            
                // Check if the searchText is present in either the name or description
                return lowerCaseName.includes(lowerCaseSearchText) || lowerCaseDescription.includes(lowerCaseSearchText);
              });
            


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
        
          {
            
          filteredData.length>0? (filteredData.map((pizza)=>{

              return (
              <FoodCard title={pizza.title} src={pizza.src} price = {pizza.prize} des={pizza.des} />
              );

            })): ([<h1>NO DATA</h1>])
          
            
          
        }
        </section>
      
      </div>
    </>
  );
}

export default MenuBox;
