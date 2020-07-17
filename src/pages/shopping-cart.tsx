import React from "react";

interface IShoppingCart {
  setProductsInCart: (products: any) => void;
}

const ShoppingCart: React.FC<IShoppingCart> = ({ setProductsInCart }) => {
  return <h1>Shopping cart screen</h1>;
};

export default ShoppingCart;
