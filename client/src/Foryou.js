import React from 'react';
import './App.css';
import {useRef} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Foryou({fun})
{
  const data = [{src:'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png',name:'Paneer'},{src:'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg',name:'North Indian'},{src:'https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png',name:'Ice Creams'},{src:'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',name:'Rolls'},{src:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',name:"Dosa"},{src:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',name:"Biryani"},{src:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',name:'Burger'},{src:'https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png',name:'Chole Bhature'},{src:'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',name : 'Cake'}]
  const containerRef = useRef(null);

  const handleSlideLeft = () => {
    const container = containerRef.current;
    const scrollSpeed = 220; // Adjust the scroll speed (larger value for faster scroll)

    container.scrollBy({
      top: 0,
      left: -scrollSpeed, // Negative value to scroll left
      behavior: 'smooth', // Use smooth behavior for animated scroll
    });
  };

  const handleSlideRight = () => {
    const container = containerRef.current;
    const scrollSpeed = 220; // Adjust the scroll speed (larger value for faster scroll)

    container.scrollBy({
      top: 0,
      left: scrollSpeed, // Positive value to scroll right
      behavior: 'smooth', // Use smooth behavior for animated scroll
    });
  };

  return (
    <div className="yourfavdiv">
      <section>
        <section className="foryou">
          <section className="containforyou" ref={containerRef}>
            {data.map((item, index) => (
              <div className="frame1" key={index}>
                <img src={item.src} alt="dish image" height="170px" width="170px" />
                <div style={{ color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <h4 onClick={() => alert('Category Clicked')}>{item.name}</h4>
                </div>
              </div>
            ))}
                <button style={{position:'absolute',left:'1%',top:'20%',width:'50px',height:'50px',border:'2px solid white',borderRadius:'45%',backgroundColor:'white'}} onClick={handleSlideLeft}>{'<'}</button>
      <button style={{position:'absolute',right:'1%',top:'20%',width:'50px',height:'50px',border:'2px solid white',borderRadius:'45%',backgroundColor:'white'}} onClick={handleSlideRight}>{'>'}</button>
          </section>
      
        </section>
      
      </section>
     
    </div>
  );
}

export default Foryou;





