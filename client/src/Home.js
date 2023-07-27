import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

export default function Home()
{
    return (
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
  
  <title>Zomato</title>
  <header className='header1'>
    <nav>
      <div className="buttons">
        <div>Investor Relations</div>
        <div>Add Restaurant</div>
        <div>Log in</div>
        <div>Sign In</div>
      </div>
    </nav>
    <div className="container">
     <div className='name'>KHAO-PIO.COM</div>
      <h1>Discover The Best Foods And Drinks In Chandrapura</h1>
    </div>
  </header>
  <div className="orderonline" >
    <div className="image">
      <Link to='/orderonline'> <img
        src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
        alt=""
      /></Link>
    </div>
    <div className="desc">
      <h3>ORDER ONLINE</h3>
      <h4>order from here</h4>
    </div>
  </div>

</>

    );
}