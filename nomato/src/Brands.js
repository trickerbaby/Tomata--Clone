import React from "react";
import './App.css';



function Brands()
{
  const data = [{src:'https://b.zmtcdn.com/data/brand_creatives/logos/1f22088e6df2e460f767098684580008_1605097142.png?output-format=webp',name:'brijwasi'},{src:'https://b.zmtcdn.com/data/brand_creatives/logos/f131344c5706b4234c4d5846725279d0_1645457493.png?output-format=webp',name:'Mittal Foods'},{src:'https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613212841.png?output-format=webp',name:'Pizza hut'},{src:'https://b.zmtcdn.com/data/brand_creatives/logos/f81238afe60e51179353b2c8ed86f392_1606123397.png?output-format=webp',name:'Raving King'},{src:'https://b.zmtcdn.com/data/brand_creatives/logos/54d774d8130c8ea174c7e7dcfe6d7954_1605097164.png?output-format=webp',name:'Shankar Mithai Wala'},{src:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png',name:'Burger King'}];


  return (
    
    <>
    <h2>Top Brands for You</h2>
    <section className="topbrands">
    {data.map(function(brand){
      return (
        <div className="frame2">
        <img
          src={brand.src}
          alt="dish image"
          height="170px"
          width="170px"
        />
        <h3 >{brand.name}</h3>
        <h3></h3>
        <h4>20 min</h4>
        <h4></h4>
      </div>
      );
    })}

    </section>
  </>
  );
}

export default Brands;