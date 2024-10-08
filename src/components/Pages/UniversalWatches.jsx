import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UniversalWatches = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Universal")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="watch-section">
      <p>LATEST WATCHES YOU CAN'T RESIST!</p>
      <h3>Universal Timekeepers of the world</h3>
      <div className="items-container mt-5">
        {items.map((item) => (
            <div className="item" key={item.id}>
              <Link to={`/productdetails/Universal/${item.id}`}>
                <img className="univimg" src={item.img} alt={item.name} />
              </Link>
              <p>{item.name}</p>
              <p className="mb-5">DETAILS</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default UniversalWatches;
