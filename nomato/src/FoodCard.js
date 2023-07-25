import React from 'react';
import './FoodCard.css';

export default function FoodCard({title,src,price,des}) {



  return (
    <>
    <div className='outbox'>
      <div className='imageholder'>
        <img src={src} />
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
            }}>{title}</h4>
            <div className='upperstuff-lower'>
              <span className='moneytag'>{price}Rs.</span>
            </div>
          </div>
        </div>
        <p className='ingred'>
              {des}
        </p>
      </div>
      </div>
    </>
  );
}
