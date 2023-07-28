import React from "react";
import Restmenu from "./restmenu";
import { Routes,Route } from "react-router-dom";
import './Rest.css';
import MenuBox from "./MenuBox";

function Rest()
{
    return (
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
    rel="stylesheet"
  />
  <title>Document</title>
  <div className="bannergrid">
    <div className="bgc1">..</div>
    <div className="bgc2">
      <div id="lowerbg">..</div>
      <div id="upperbg"> <div class="overlay-text">
      <a href="#restmenu">view gallary</a>
  </div></div>
    </div>
  </div>
  <div className="lowergrid">
    <div className="namegrid">
      <h1>Domino's Pizza</h1>
    </div>
    <div className="ratinggrid">
      <section id="ratingsection">
        <div className="ratebox1">
          <div id="greenbox">
            <h3>5.0</h3>
            <img
              src="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-10.png"
              alt="*"
              height="15px"
              width="15px"
            />
          </div>
          <div id="detailbox">
            <div>1</div>
            <div>Dining Reviews</div>
          </div>
        </div>
        <div className="ratebox2">
          <div id="greenbox2">
            <h3>4.3</h3>
            <img
              src="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-10.png"
              alt="*"
              height="15px"
              width="15px"
            />
          </div>
          <div id="detailbox">
            <div>430</div>
            <div>Delivery Reviews</div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div style={{margin:'50x'}}>
    <h3>Pizza, Italian, Pasta, Fast Food, Desserts</h3>
    <h3 style={{ color: "rgb(138, 133, 133)" }}>Mathura Locality, Mathura</h3>
  </div>
  <div className="DBS">
    <div id="Direct">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/1200px-Google_Maps_pin.svg.png"
        alt=">"
        height="20px"
        width="10px"
      />
      <div>. Direction</div>
    </div>
    <div id="book">
      <img
        src="https://www.freeiconspng.com/uploads/bookmarks-icon-27.png"
        alt=">"
        height="20px"
        width="z0px"
      />
      <div>Bookmark</div>
    </div>
    <div id="share">
      <img
        src="https://p7.hiclipart.com/preview/815/962/571/share-icon-computer-icons-icon-design-social-networking-service-download-button-thumbnail.jpg"
        alt=">"
        height="20px"
        width="20px"
      />
      <div>. Share</div>
    </div>
  </div>
  <Restmenu />    

<Routes>

<Route path="showmenu" element={<MenuBox />} />
<Route path="reviews" element={<h1>REVIEWS DISPLAYED</h1>} />
</Routes>

</>

    );
}

export default Rest;