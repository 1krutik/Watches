import React from "react";

function Slider() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              className="sliderimg "
              src="https://chrono-dial.myshopify.com/cdn/shop/files/slider2-bg.jpg?v=1621578873"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              className="sliderimg"
              src="https://chrono-dial.myshopify.com/cdn/shop/files/slider1-bg.jpg?v=1621578898"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              className="sliderimg"
              src="https://chrono-dial.myshopify.com/cdn/shop/files/slider3-bg.jpg?v=1621578932"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
