import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function Cards({ choice, filter,sortornot }) {
  const [data, setData] = useState([]);


    console.log("sortornot is in card.js ",sortornot);
  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = () => {
    axios
      .post('http://localhost:3001/getrest', {
        filter: filter,
      })
      .then(response => {
        // Handle the successful response
        console.log("******got response from server*******")
        if(sortornot === "asc")
        {
          console.log("tried sorting the object array");
          response.data.sort((a,b)=> a.rate - b.rate);
        }
        console.log(response.data);
        
        setData(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  const rest = [
    { name: 'pind punjabi', rate: 4.5, src: 'https://b.zmtcdn.com/data/pictures/5/18974175/781235a2fc0c1b51ec63f4932c5ec386_o2_featured_v2.jpg?output-format=webp' },
    { name: 'gola paties and confectioners', rate: 3.5, src: 'https://b.zmtcdn.com/data/pictures/8/19003968/d217c15402ce3ef6b44194063a77cbc8_o2_featured_v2.jpg?output-format=webp' },
    { name: 'Mazeed Restaurant', rate: 5, src: 'https://b.zmtcdn.com/data/pictures/5/19921035/6862f1b5d21c3d756c3c744eaf6df5c3_o2_featured_v2.jpg?output-format=webp' },
    { name: 'Brijwasi Centrum', rate: 4.8, src: 'https://b.zmtcdn.com/data/pictures/0/19026950/47cfd4569b70e288db6e2d8402d77df7_o2_featured_v2.jpeg?output-format=webp' },
  ];

  const pizzas = [
    { name: 'Shankar and Modi Bakers Zone', rate: 4, src: 'https://b.zmtcdn.com/data/dish_photos/c45/9c15b196a67a3401f6374c3e12252c45.jpg' },
    { name: 'Dominos Pizza', rate: 5, src: 'https://b.zmtcdn.com/data/dish_photos/643/32ef0972970366efec1fd0838705a643.png' },
    { name: 'Bansal Bakers', rate: 4.3, src: 'https://b.zmtcdn.com/data/pictures/5/20306815/a36a3bd156e21877a2091ad78550dc61_o2_featured_v2.jpg' },
    { name: 'Pizza Hut', rate: 3.6, src: 'https://b.zmtcdn.com/data/dish_photos/72c/69354100c2391f3dda1623d60e99572c.jpg' },
  ];

  const cardData = choice === 0 ? rest : pizzas;
  if(sortornot === "asc")
        {
          console.log("tried sorting the object array");
          data.sort((a,b)=> a.rate - b.rate);
        }
        if(sortornot === "des")
        {
          console.log("tried sorting the object array in des");
          data.sort((a,b)=> b.rate - a.rate);
        }

  return (
    <div className="card-section">
      {data.map(function (item) {
        return (
          <div className="frame3" key={item._id}>
            <img src={item.src} alt="card image" />
            <div style={{ display: 'flex', flexDirection: 'row'}}>
              <Link to="/dominos">{item.name}</Link>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4BFF3F', width: '50px', height: '30px' ,float:'right',border:'solid 2px',borderRadius:'40%'}}>{item.rate}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
