import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { editListItem } from "../services/products"

const EditFormContainer = ({ item, onToggleForm, isFormVisible }) => {

  const handleEdit = async (id, title, price, quantity) => {
    try {
      let result = await editListItem(id, title, price, quantity);
    } catch (err) {
      console.error(err);
    }
  }

  const handleFormSubmission = async (newItem) => {
    try {
      await handleEdit(newItem.id, newItem.title, newItem.price, newItem.quantity);
    } catch (err) {
      console.log(err);
    }

    onToggleForm(false)
  };

  handleToggleForm = onToggleForm;

  return (
    <div className={isFormVisible ? "add-form visible" : "add-form"}>
      <EditForm item={item} onToggleForm={handleToggleForm} onEdit={handleFormSubmission} />
    </div>
  );
};

const EditForm = ({ item, onToggleForm, onEdit }) => {
  const [formData, setFormData] = useState({
    id: item._id,
    title: item.title,
    price: item.price,
    quantity: item.quantity,
  });

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await onEdit(formData);
  };

  const handleInputEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <h3>Edit Product</h3>
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
          <button type="submit" onClick={handleEditSubmit}>
            Submit
          </button>
          <button type="button" onClick={onToggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

function ListItem({ item, onDelete, onEdit }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const deleteItem = async () => {
    await onDelete(item._id);
  }

  const handleEditSubmit = onEdit;



  return (
    <li className="product">
      <div className="product-details">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity}</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleToggleForm}>Edit</button>
          <EditFormContainer item={item} isFormVisible={isFormVisible} onToggleForm={handleToggleForm} onSubmit={handleEditSubmit} />
        </div>
        <button className="delete-button" onClick={deleteItem}><span>X</span></button>
      </div>
    </li>
  )
}

export default ListItem