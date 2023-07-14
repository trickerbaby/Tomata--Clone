import React from "react";
import './App.css'
import {useState,useEffect} from 'react';
import './filter.css';
import { div } from "@tensorflow/tfjs";

function Filters({FilterClickHandler})
{
  const [Color,SetColor] = useState('white');
  const [TextColor,SetTextColor] = useState('rgb(156, 156, 156)');
  const [isOverlay,SetOverLay] = useState(false);
  
  function makeitdark()
  {
    SetOverLay(true);
  }

  function colorchange()
  {
    if(Color === 'white')
    {
    SetColor('red');
    SetTextColor('white');
    console.log("TextColor set as ",TextColor);
    }
    else
    {
    SetColor('white');
    SetTextColor('rgb(156, 156, 156)');
    
    }
    FilterClickHandler();
  }

   

  return (
    <>
      <div>
        {isOverlay && (
          <>
            <div className="overlay"></div>
            <div className="filterbox">This is a filterbox</div>
          </>
        )}
      </div>
    <section id="filter-chamber">
    <div onClick={makeitdark} className="filt" fill="#9C9C9C" width="18" height="18">Filters</div>
    
    <div onClick={colorchange} className="filt" fill="#9C9C9C" width="18" height="18" style={{backgroundColor:Color,color:TextColor}}>Ratings 4.0+</div>
    <div className="filt" fill="#9C9C9C" width="18" height="18">Cuisines</div>
    
    <h3></h3>
  </section>
  </>
  );
}

export default Filters;