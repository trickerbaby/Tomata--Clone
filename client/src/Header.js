import React from 'react';
import './App.css'



function Header({ onLoginClick }) {
    return (
      <header>
        <nav className="navb">
          

        <div className='name2'>KHAO-PIO.COM</div>


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