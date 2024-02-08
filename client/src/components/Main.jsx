import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ListItem from "./ListItem"
import AddForm from "./AddForm"
import getProductsFromDatabase from "../services/products"

function Main({ items }) {
  const [productData, setProductData] = useState({})

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
    console.log(productData)
  }, []);

  return (
    <main>
      <div class="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {items.map((item, index) => (
            <ListItem key={index} product={item.title} price={item.price} quantity={item.quantity} />
          ))}
        </ul>
      </div>
      <AddForm />
    </main>
  )
}

export default Main