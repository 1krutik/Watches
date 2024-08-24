import React from "react";
import "./Slider.css"; // Import the CSS file

function Slider() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="sliderimg"
              src="https://chrono-dial.myshopify.com/cdn/shop/files/slider2-bg.jpg?v=1621578873"
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className="slider-title">PREMIUM MODEL</h5>
              <p className="slider-text">Stylish external wrist watch</p>
              <button className="slider-button btn col-3">EXPLORE</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="sliderimg"
              src="https://chrono-dial.myshopify.com/cdn/shop/files/slider1-bg.jpg?v=1621578898"
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className="slider-title ">FALL IN LOVE</h5>
              <p className="slider-text">Redefining the meaning of time</p>
              <button className="slider-button btn col-3">EXPLORE</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="sliderimg"
              src="https://chrono-dial.myshopify.com/cdn/shop/files/slider3-bg.jpg?v=1621578932"
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className="slider-title">SECRET NEW MODELS</h5>
              <p className="slider-text">Priceless and timeless designs</p>
              <button className="slider-button btn col-3">EXPLORE</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
