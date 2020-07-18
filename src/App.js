import React, { useState } from "react";
import "./App.css";
import Initial from "./pages/initial.tsx";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login.tsx";
import SignUp from "./pages/sign-up.tsx";
import ProductsList from "./pages/products-list.tsx";
import ShoppingCart from "./pages/shopping-cart.tsx";
import FinishedOrder from "./pages/finished-order.tsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Initial />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/products-list" exact>
          <ProductsList />
        </Route>
        <Route path="/shopping-cart" exact>
          <ShoppingCart />
        </Route>
        <Route path="/finished-order" exact>
          <FinishedOrder />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
