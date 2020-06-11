import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/pageHeader";
import PokeCardList from "./components/pokeList";
import PokeProfile from "./components/pokeProfile";
// import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/pokemon/:pokeId" component={PokeProfile} />
          <Route path="/pokemon" component={PokeCardList} />
          <Redirect exact from="/" to="/pokemon" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
