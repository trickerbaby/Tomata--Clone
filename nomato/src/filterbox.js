import React, { useEffect } from "react";
import './filterbox.css';
import {useState} from 'react';

function Filterbox({setobject,seter})
{
   const [filtername,setfilter] =  useState('');
   
   useEffect(()=>{
    console.log("abhi filter name is",filtername);
   },[filtername]);

   const broughter = ()=>
            {
            if(filtername === "rating")
            {
                return (<div><input type='radio' value={1} />{1}
                <input type='radio' value={2}/>{2}
                <input type='radio' value={3}/>{3}
                <input type='radio' value={3}/>{4}
                <input type='radio' value={3}/>{5}
                </div>);
            }
            if (filtername === "category") {
                return (
                  <div>
                    <input type='radio' value={'veg'} onClick={() => { seter('veg'); }} />{'veg'}
                    <input type='radio' value={'nonveg'} onClick={() => { seter('nonveg');}} />{'nonveg'}
                  </div>
                );
              }
              
             }

    return(
  <div className="filterboxcontainer">
    <div className="closebutton" style={{color:'red'}}>X</div>
    <div className="filterbox">
      <section className="left">
        <div onClick={()=>setfilter('sort')} className="cardleft">
          <h2>Sort By</h2>
        </div>
        <div onClick={()=>setfilter('rating')} className="cardleft">
          <h2>Rating</h2>
        </div>
        <div onClick={()=>setfilter('category')} className="cardleft">
          <h2>Category</h2>
        </div>
      </section>

      <section className="right">

        { 
        broughter()
        
        }

      </section>
    </div>
  </div>

    );
}

export default Filterbox;