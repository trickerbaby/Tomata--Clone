import React from 'react';
import './App.css'



function Header({ onLoginClick }) {
    return (
      <header>
        <nav className="navb">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="Zomato"
          />
          <div className="InputContainer">
        <input
    placeholder="Search.."
    id="input"
    className="input"
    name="text"
    type="text"
     />
      </div>

          <Navend onLoginClick={onLoginClick}/>
        </nav>
      </header>
    );
  }

  function Navend({onLoginClick})
  {
    return (
      <div id="navend">
            <h2 onClick={onLoginClick}>Login</h2>
            <h2>Sign Up</h2>
          </div>
    );
  }
  

  export default Header;