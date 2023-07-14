import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Orderonline from './Orderonline';
import Header from './Header';
import LoginForm from './LoginForm';
import Filters from './Filters';
import Rest from './Rest';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';





function App() {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [BrandValue,SetBrandValue] = useState(0);
  const [FilterObj,SetFilter] = useState({});

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  function handle()
  {
    console.log("pizzas");
    SetBrandValue(1);
  }
  function filterclick()
  {
    SetFilter({rate:4});
    console.log(FilterObj);
  }

  return (
    <BrowserRouter>

    <div className={`app ${showLoginForm ? 'dark-overlay' : ''}`}>

      <Header onLoginClick={toggleLoginForm} />
      {showLoginForm && <LoginForm onClose={toggleLoginForm} />}
      <Filters FilterClickHandler={filterclick}/>
      <Routes>
        <Route path="*" element={<Orderonline typeofcard={FilterObj} />} />
        <Route path="/dominos" element={<Rest />} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}
export default App;
