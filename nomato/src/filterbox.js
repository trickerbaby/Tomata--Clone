import React, { useEffect, useState } from "react";
import './filterbox.css';

function Filterbox({ setobject, seter, onof }) {
  const [filtername, setfilter] = useState('');

  useEffect(() => {
    console.log("abhi filter name is", filtername);
  }, [filtername]);

  const handleSetEter = (value) => {
    seter(value);
  };

  const broughter = () => {
    if (filtername === "rating") {
      return (
        <div>
          <input type='radio' value={1} onClick={() => handleSetEter('1')} />{1}
          <input type='radio' value={2} onClick={() => handleSetEter('2')} />{2}
          <input type='radio' value={3} onClick={() => handleSetEter('3')} />{3}
          <input type='radio' value={4} onClick={() => handleSetEter('4')} />{4}
          <input type='radio' value={5} onClick={() => handleSetEter('5')} />{5}
        </div>
      );
    }
    if (filtername === "category") {
      return (
        <div>
          <input type='radio' value={'veg'} onClick={() => handleSetEter('veg')} />{'veg'}
          <input type='radio' value={'nonveg'} onClick={() => handleSetEter('nonveg')} />{'nonveg'}
        </div>
      );
    }
  };

  return (
    <div className="filterboxcontainer">
      <button onClick={()=>{onof();}} className="closebutton" style={{ color: 'red', zIndex: 10000 }}>X</button>
      <div className="filterbox">
        <section className="left">
          <div onClick={() => setfilter('sort')} className="cardleft">
            <h2>Sort By</h2>
          </div>
          <div onClick={() => setfilter('rating')} className="cardleft">
            <h2>Rating</h2>
          </div>
          <div onClick={() => setfilter('category')} className="cardleft">
            <h2>Category</h2>
          </div>
        </section>

        <section className="right">
          {broughter()}
        </section>
      </div>
    </div>
  );
}

export default Filterbox;
