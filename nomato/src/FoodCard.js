import React from 'react';
import './FoodCard.css';

export default function FoodCard() {
  return (
    <>
    <div className='outbox'>
      <div className='imageholder'>
        <img src='https://b.zmtcdn.com/data/dish_photos/e4e/825cf2e2e5851112830ac5beb5f1fe4e.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*' />
      </div>

      <div className='desc'>
        <div style={{
          display: 'flex',
          webkitBoxPack: 'justify',
          justifyContent: 'space-between'
        }}>
          <div className='upperstuff'>
            <h4 style={{
              fontSize: '1.8rem',
              fontWeight: '500',
              color: 'rgb(28, 28, 28)',
              lineHeight: '150%',
              margin: '0px'
            }}>Fiery Jalepano And Paprica</h4>
            <div className='upperstuff-lower'>
              <span className='moneytag'>145Rs.</span>
            </div>
          </div>
        </div>
        <p className='ingred'>
          A super spicy veg pizza with a new spicy peri peri sauce and
        </p>
      </div>
      </div>
    </>
  );
}
