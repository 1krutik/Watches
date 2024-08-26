import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BuyPage = () => {
  const {category,id}=useParams()
  const [item,setItem]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:3000/${category}/${id}`) // Use category and ID to fetch the specific product
    .then((response) => {
      setItem(response.data);
    })
    .catch((error) => {
      console.error("There was an error fetching the product details!", error);
    });
}, [category, id]);

if(!item){
  return <h1>Loading</h1>
}
 
  return (
    <div className="product-details">
      <img src={item.img} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.desc}</p>
      <p>Price: ${item.price}</p>
    </div>
  )
}

export default BuyPage