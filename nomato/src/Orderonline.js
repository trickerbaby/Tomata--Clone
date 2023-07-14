import React from "react";
import Header from "./Header";
import Foryou from "./Foryou";
import Brands from "./Brands";
import Cards from "./Cards";
import Filters from "./Filters";
import './App.css';
import {Route, Routes } from "react-router-dom";


function Orderonline({bv,handle,typeofcard})
{
   
    return(
        <>
  <h2>Inspiration For your first order</h2>
  <Foryou fun={handle} />
 <Brands />
   <h1>Order Food Online In Dampier Nagar</h1>
   <div className='card-section'>
    <Routes>
        <Route path="" element={ <Cards choice={0} filter={typeofcard} />} />
        <Route path="pizzas" element={ <Cards choice={1} />} />
    </Routes>
    </div>
</>
    );
}

export default Orderonline;