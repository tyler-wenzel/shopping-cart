import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ListItem from "./ListItem"
import AddFormContainer from "./AddFormContainer"
import getProductsFromDatabase from "../services/products"

function Main({ items }) {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    async function getProducts() {
      try {
        let result = await getProductsFromDatabase();
        setProductData(result)
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  }, []);

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {productData.map((item) => (
            <ListItem key={item._id} product={item.title} price={item.price} quantity={item.quantity} />
          ))}
        </ul>
      </div>
      <AddFormContainer />
    </main>
  )
}

export default Main