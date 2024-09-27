import { useState, useEffect } from 'react'
import axios from "axios";
import { FaAddressCard } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import './App.css'

const App = () => {

  const [productsList, setProductsList] = useState([]);

  // const getProducts = async () => {
  //   // Call api, get data and save it in a variable (useState)
  // const res = await fetch("https://dummyjson.com/product");
  // const data = await res.json();
  //   console.log(data.products);
  //   setProductsList(data.products);
  // };

  const getProducts = async () => {
    try {
      const queryParams = {
        page: 1,
        query: "nature",
        client_id: "9Vvg-u0ZX3L3oblXrntcuwFQpg0Ks18qANEUHe9VKko",
        per_page: 20
      }

      // const res = await axios.get("https://dummyjson.com/product");
      const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: queryParams
      })

      console.log(res);
      // setProductsList(res.data.products)
    } catch (err) {
      console.log("ERROR", err)
    }
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const handleBtnClick = () => {
    getProducts();
    console.log("Btn clicked");
  };

  return (
    <>
      <h1>APIs - Quiz</h1>
      <button onClick={handleBtnClick}>Get Products</button>
      <FaAddressCard style={{}} />
      <FaAmazon />
      {
        productsList.map((data) => <p key={data.id}>{data.title}</p>)
      }
    </>
  )
}

export default App
