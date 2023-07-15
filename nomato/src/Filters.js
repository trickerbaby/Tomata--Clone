import React from "react";
import './App.css'
import {useState,useEffect} from 'react';
import './filter.css';
import { div } from "@tensorflow/tfjs";
import Filter from './filterbox.js';

function Filters({FilterClickHandler})
{
  const [Color,SetColor] = useState('white');
  const [TextColor,SetTextColor] = useState('rgb(156, 156, 156)');
  const [isOverlay,SetOverLay] = useState(false);
  const [obj,setobj] = useState({});


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

    FilterClickHandler(obj);
  }

  function nonveg(type) {
    setobj(prevState => {
      const updatedObj = { ...prevState };
      if(type === "veg")
      {
      updatedObj['cat'] = 'veg';
      console.log("obj for veg is", updatedObj);
      }
      else
      {
        updatedObj['cat'] = 'nonveg';
      console.log("obj for non-veg is", updatedObj);
      }
      return updatedObj;
    });
    FilterClickHandler(obj);
  }


   

  return (
    <>
      <div>
        {isOverlay && (
          <>
            <div className="overlay"></div>
            <Filter setobject = {obj} seter={nonveg}/>
          </>
        )}
      </div>
    <section id="filter-chamber">
    <div onClick={makeitdark} className="filt" fill="#9C9C9C" width="18" height="18">Filters</div>
    
    <div onClick={()=>{ obj['rate'] = {$gt:4};colorchange();} } className="filt" fill="#9C9C9C" width="18" height="18" style={{backgroundColor:Color,color:TextColor}}>Ratings 4.0+</div>
    <div onClick={()=>{nonveg();colorchange();}} className="filt" fill="#9C9C9C" width="18" height="18">Non Veg</div>
    
    <h3></h3>
  </section>
  </>
  );
}

export default Filters;