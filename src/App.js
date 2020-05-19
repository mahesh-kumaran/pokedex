import React from "react";

import Header from "./components/pageHeader";
import PokeCardList from "./components/pokeList";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div>
      <Header />
      <PokeCardList />
    </div>
  );
}

export default App;
