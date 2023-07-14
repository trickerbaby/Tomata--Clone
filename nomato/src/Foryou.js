import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Foryou({fun})
{

  const data = [{src:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',name:'Pizza'},{src:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',name:"Dosa"},{src:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',name:"Biryani"},{src:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',name:'Burger'},{src:'https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png',name:'Chole Bhature'},{src:'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',name : 'Cake'}]

  function slideleft()
  {
    
  }
  return (
    <div className='yourfavdiv'>
    <section>
    <section className="foryou">
      {data.map(function(item)
      {
        return (
          <div className="frame1">
        <img
          src={item.src}
          alt="dish image"
          height="170px"
          width="170px"
        />
        <div style={{ color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Link to="/pizzas"><h4>{item.name}</h4></Link>
</div>

      </div>);
})}     
    </section>
  </section> 
  </div>
  );
}


export default Foryou;