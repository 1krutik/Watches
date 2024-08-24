import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const ShopPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:3000/shop') // Replace with your API endpoint
      .then(response => {
        setItems(response.data); // Update the state with the fetched data
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
      <>
    <div className='d-flex bg-dark flex-wrap justify-content-center gap-2'>
     
        {items.map(item => (
          <>
        <div className="card  mb-2">
        <img src={item.img} className="card-img-top fimg p-2 " alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.desc}</p>
          <Link className='btn btn-outline-secondary' to={"/Buy"}>Buy Now</Link>
        </div>
      </div>
         
          </>
        ))}
     
    </div>
        </>
  );
};

export default ShopPage;
