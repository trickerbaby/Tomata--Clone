import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function Cards({ choice, filter, sortornot }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [filter]);

  useEffect(() => {
    fetchData();
  }, [sortornot]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post('https://tomatobackend.onrender.com/getrest', {
        filter: filter,
      });

      console.log("******got response from server*******");
      let material = response.data;

      // Check if the response data is an array before sorting
      if (Array.isArray(material) && sortornot === "asc") {
        console.log("tried sorting the object array");
        material.sort((a, b) => a.rate - b.rate);
      }

      console.log(material);
      setData(material);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Your loading circle CSS code
  const loadingCircleStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '5px solid rgba(0, 0, 0, 0.1)',
    borderTop: '5px solid red',
    animation: 'spin 1s linear infinite',
    position: 'absolute',
    top: '50%',
    left: '50%'
  };

  return (
    <div>
      {/* Display the loading circle while isLoading is true */}
      {isLoading ? (
        <div style={loadingCircleStyle}></div>
      ) : (
        <div className="card-section">
          {Array.isArray(data) && data.length > 0 ? (
            data.map(function (item) {
              return (
                <div className="frame3" key={item._id}>
                <img src={item.src} alt="card image" />
                <div className="content">
                  <Link to="/dominos" className="restaurant-name">
                    {item.name}
                  </Link>
                  <div className="rating">{item.rate}</div>
                </div>
              </div>
              );
            })
          ) : (
            <div>No data available</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cards;
