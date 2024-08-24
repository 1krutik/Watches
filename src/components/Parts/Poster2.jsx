import React from 'react';
import "./Poster2.css";

const Poster2 = () => {
  return (
    <div className='poster2 p-5'>
      <div className="watch-section">
        <p>CELEBRATE THE FESTIVITIES</p>
        <h3 className='slider-title mb-5'>
          Let The Celebrations Begin Brightly By Your Beautiful Gifts
        </h3>

        <div id="poster2Carousel" className="poster2-carousel carousel slide mb-5" data-bs-ride="carousel"> 
          <div className="carousel-inner">
            <div className="poster2-carousel-item carousel-item active">
              <div className="row">
                <div className="col-6">
                  <img src="https://chrono-dial.myshopify.com/cdn/shop/files/Untitled-1_03_7853cd65-f46f-4adb-b88a-d97765d3d90c.jpg?v=1679398033&width=1500" className="w-100" alt="img 1"/>
                </div>
                <div className="col-6">
                  <img src="https://chrono-dial.myshopify.com/cdn/shop/files/Untitled-2_03.jpg?v=1678689712&width=1500" className="w-100" alt="img 2"/>
                </div>
              </div>
            </div>
            <div className="poster2-carousel-item carousel-item">
              <div className="row">
                <div className="col-6">
                  <img src="https://chrono-dial.myshopify.com/cdn/shop/files/Untitled-2_03.jpg?v=1678689712&width=1500" className="w-100" alt="img 2"/>
                </div>
                <div className="col-6">
                  <img src="https://chrono-dial.myshopify.com/cdn/shop/files/Untitled-1_03.jpg?v=1678689726&width=1500" className="w-100" alt="img 3"/>
                </div>
              </div>
            </div>
          </div>
          <button className="poster2-carousel-control-prev carousel-control-prev" type="button" data-bs-target="#poster2Carousel" data-bs-slide="prev">
            <span className="poster2-carousel-control-prev-icon carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="poster2-carousel-control-next carousel-control-next" type="button" data-bs-target="#poster2Carousel" data-bs-slide="next">
            <span className="poster2-carousel-control-next-icon carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Poster2;
