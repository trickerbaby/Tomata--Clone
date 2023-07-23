import React from "react";
import FoodCard from "./FoodCard";
import './MenuBox.css';

function MenuBox() {
  return (
    <>
      <div className="outerbox">
        <section className="category-section">
          <div className="category-card" >
            <a href="#today">Recommended</a>
          </div>
          <div className="category-card">
            Popular
          </div>
        </section>

        <section className="FoodLister">
            <h1 id="today">Todays Special</h1>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <h1 id="recom">Recommended</h1>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <h1 id="">End</h1>
        </section>
      </div>
    </>
  );
}

export default MenuBox;
