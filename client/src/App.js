import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import './App.css';
import Orderonline from './Orderonline';
import Header from './Header';
import LoginForm from './LoginForm';
import Filters from './Filters';
import Rest from './Rest';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';



function App() {

  const [BrandValue,SetBrandValue] = useState(0);
  const [FilterObj,SetFilter] = useState({});
  const [dosort,setsort] = useState('');

  
  
 

  useEffect(() => {
    console.log("me hu appjs wala",FilterObj);
  }, [FilterObj]);
  useEffect(() => {
    console.log("me hu appjs wala sort wala",dosort);
  }, [dosort]);

  function handle()
  {
    console.log("pizzas");
    SetBrandValue(1);
  }
  function filterclick(obj)
  {
    console.log("in app.js filterclick obj == ",obj);
    if(obj == "sortA")
    {
      
      setsort('asc');
      console.log("setsort('asc') called value = ",dosort);
      SetFilter(FilterObj);
    }
    else if(obj === "sortD")
    {
      
      setsort('des');
      console.log("setsort('des') called value = ",dosort);
      
      SetFilter(FilterObj);
    }
    else
    {

    SetFilter(obj);
    }
    console.log("filter click wala ",FilterObj);
  }

  return (
    <BrowserRouter>

    <div className={`app`}>

      

      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/orderonline" element={<> <Header  />
              
               <Filters FilterClickHandler={filterclick}/>
                <Orderonline typeofcard={FilterObj} sortoption = {dosort}/></>} />


        <Route path="/dominos/*" element={<><Header  />
             
           <Rest /></>} />

      </Routes>
    </div>
    </BrowserRouter>

  );
}
export default App;
