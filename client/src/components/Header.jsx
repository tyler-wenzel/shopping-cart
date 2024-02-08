import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <header>
      <h1>The Shop!</h1>
      <div class="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button class="checkout" disabled>Checkout</button>
      </div>
    </header>
  )
}

export default Header