import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header"
import Main from "./Main"
import mockData from "../mockData/data"

function App() {
  return (
    <div id="app">
      <Header />
      <Main />
    </div>
  )
}

export default App