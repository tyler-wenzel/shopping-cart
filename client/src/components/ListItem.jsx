import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function ListItem({ product, price, quantity }) {
  const [editVisibility, setEditVisibility] = useState('delete-button');

  const handleEditOpening = () => {
    setEditVisibility()
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{product}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity}</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit">Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
    </li>
  )
}

export default ListItem