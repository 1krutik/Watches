import React, { useEffect, useState } from 'react';
import "./Dials.css";
import axios from 'axios';

const Dials = () => {

  const [items,setItems]=useState([])

  useEffect(()=>{


    axios.get("http://localhost:3000/Dials")
    .then(response=>{
      setItems(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])



  return (

    <div className="watch-section mt-5">
      <p>HOW DO YOU FEEL?</p>
      <h3>CHOOSE DIAL</h3>
      <div className="items-container mt-5">
        {items.map((item) => {
            return (
                <div className="item" key={item.id}> {/* Add key for each item */}
              <img className="univimg mb-5" src={item.img} alt={item.name} />
            </div>
          );
        })}
        </div>
      </div>
  );
}

export default Dials;
