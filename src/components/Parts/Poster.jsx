import React from "react";

const Poster = () => {
  return (
    <div className="w-100 col-12 d-flex">
      <div className="posterimgs col-6">
        <img className="fimg w-100 h-100" src="https://chrono-dial.myshopify.com/cdn/shop/files/img1_fd29a0af-d3d1-4196-a870-038c137ebdaf.jpg?v=1613162804&width=1500" alt="" />
        <div className="overlay">
          <h2>Romance in the air</h2>
          <p>WEAR YOUR STYLE WITH VERVE & ATTITUDE</p>
          <button className="details-button btn col-3">DETAILS</button>
        </div>
      </div>
      <div className="posterimgs col-6">
        <img className="simg w-100 h-100" src="https://chrono-dial.myshopify.com/cdn/shop/files/img2.jpg?v=1613162804&width=1500" alt="" />
        <div className="overlay">
          <h2>Analog & Digital</h2>
          <p>SMART WATCHES LATEST FASHION STATEMENT</p>
          <button className="details-button btn col-3">DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
