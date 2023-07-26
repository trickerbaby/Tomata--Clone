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
    console.log("overlay is ",isOverlay);
    SetOverLay(!isOverlay);
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
    const updatedObj = { ...obj };
    if (type === "veg") {
      updatedObj['cat'] = 'veg';
      console.log("obj for veg is", updatedObj);
      FilterClickHandler(updatedObj);
    } else if(type === 'nonveg'){
      updatedObj['cat'] = 'nonveg';
      console.log("obj for non-veg is", updatedObj);
      FilterClickHandler(updatedObj);
    }
    else if(type === '1'){
      updatedObj['rate'] = {$gt:1};
      console.log("obj for non-veg is", updatedObj);
      FilterClickHandler(updatedObj);
    }
    else if(type === '2'){
      updatedObj['rate'] = {$gt:2};
      console.log("obj for non-veg is", updatedObj);
      FilterClickHandler(updatedObj);
    }
    else if(type === '3'){
      updatedObj['rate'] = {$gt:3};
      console.log("obj for non-veg is", updatedObj);
      FilterClickHandler(updatedObj);
    }
    else if(type === '4'){
      updatedObj['rate'] = {$gt:4};
      console.log("obj for non-veg is", updatedObj);
      FilterClickHandler(updatedObj);
    }
    else if(type === '5'){
      updatedObj['rate'] = 5;
      console.log("obj for non-veg is", updatedObj);
      FilterClickHandler(updatedObj);
    }
    else if(type === 'sortA')
    {
      console.log("setting sortA before callomg FCH in filter.js");
      FilterClickHandler('sortA');
    }
    else if(type === 'sortD')
    {
      console.log("setting sortD before callomg FCH in filter.js");
      FilterClickHandler('sortD');
    }
    
    
    
  }




  return (
    <>
      <div>
        {isOverlay && (
          <>
            <div className="overlay"></div>
            <Filter setobject = {obj} seter={nonveg} onof={SetOverLay}/>
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