import React from 'react';
import './restmenu.css';
import { Link,Routes,Route } from 'react-router-dom';
function Restmenu()
{

    return (
        <>
        <div className='order-or-review'>
            <div><Link to="/dominos/showmenu" className='link-decor'>Order Online</Link></div>
            <div><Link to="/dominos/reviews" className='link-decor'>Reviews</Link></div>
        </div> 
        </>
    );

}

export default Restmenu;