import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import addProductToDatabase from "../services/products"

function Form() {
  const [divVisibilityClassName, setDivVisibilityClassName] = useState("add-form");
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    quantity: "",
  });

  const handleFormOpening = () => {
    setDivVisibilityClassName('.add-form.visible')
  }

  const handleFormClosing = () => {
    setDivVisibilityClassName('add-form')
  }

  const handleInputEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleClickEvent = async (event) => {
    event.preventDefault();
    console.log(formData.title, formData.price, formData.quantity)
    await handleFormSubmission(formData.title, formData.price, formData.quantity);
  }

  const handleFormSubmission = async (title, price, quantity) => {
    try {
      let result = await addProductToDatabase(title, price, quantity);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={divVisibilityClassName}>
      <p><button className="add-product-button" onClick={handleFormOpening}>Add A Product</button></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputEvent}
            required
          />
        </div>
        <div className="input-group">
          <label for="product-price">Price:</label>
          <input
            type="number"
            id="price"
            name="product-price"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleInputEvent}
            required
          />
        </div>
        <div className="input-group">
          <label for="product-quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="product-quantity"
            min="0"
            value={formData.quantity}
            onChange={handleInputEvent}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit" onClick={handleClickEvent}>Add</button>
          <button type="button" onClick={handleFormClosing}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Form