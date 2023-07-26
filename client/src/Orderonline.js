import React from "react";
import Header from "./Header";
import Foryou from "./Foryou";
import Brands from "./Brands";
import Cards from "./Cards";
import Filters from "./Filters";
import './App.css';
import {Route, Routes } from "react-router-dom";


function Orderonline({bv,handle,typeofcard,sortoption})
{

    console.log("in orderonline,js ",sortoption);
    return(
        <>
  <h2>Inspiration For your first order</h2>
  <Foryou/>
 <Brands />
   <h1>Order Food Online In Dampier Nagar</h1>
   <div className='card-section'>
       <Cards choice={0} filter={typeofcard} sortornot = {sortoption} />
    </div>
</>
    );
}

export default Orderonline;