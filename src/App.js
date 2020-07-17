import React, { useState } from "react";
import "./App.css";
import Initial from "./pages/initial.tsx";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login.tsx";
import SignUp from "./pages/sign-up.tsx";
import ProductsList from "./pages/products-list.tsx";
import ShoppingCart from "./pages/shopping-cart.tsx";
import FinishedOrder from "./pages/finished-order.tsx";
import ShoppingCartIcon from "./components/common/shopping-cart-icon";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
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
          <ShoppingCartIcon productsInCart={productsInCart.length} />
          <ProductsList setProductsInCart={setProductsInCart} />
        </Route>
        <Route path="/shopping-cart" exact>
          <ShoppingCartIcon productsInCart={productsInCart.length} />
          <ShoppingCart setProductsInCart={setProductsInCart} />
        </Route>
        <Route path="/finished-order" exact>
          <ShoppingCartIcon productsInCart={productsInCart.length} />
          <FinishedOrder setProductsInCart={setProductsInCart} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
