import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import {addProductToDatabase} from "../services/products";

const AddFormContainer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  const handleSubmit = async (formData) => {
    await handleFormSubmission(
      formData.title,
      formData.price,
      formData.quantity,
    );
  };

  const handleFormSubmission = async (title, price, quantity) => {
    try {
      await addProductToDatabase(title, price, quantity);
    } catch (err) {
      console.log(err);
    }

    setIsFormVisible(false)
  };

  return (
    <div className={isFormVisible ? "add-form visible" : "add-form"}>
      <p>
        <button className="add-product-button" onClick={handleToggleForm}>
          Add A Product
        </button>
      </p>
      <AddForm onToggleForm={handleToggleForm} onSubmit={handleSubmit} />
    </div>
  );
};

// _______________________________________________________________________________________

const AddForm = ({ onToggleForm, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    quantity: "",
  });

    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="title">Product Name:</label>
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
          <label htmlFor="price">Price:</label>
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
          <label htmlFor="quantity">Quantity:</label>
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
          <button type="submit" onSubmit={handleSubmit}>
            Add
          </button>
          <button type="button" onClick={onToggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddFormContainer;