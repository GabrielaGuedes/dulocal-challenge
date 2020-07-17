import React from "react";

interface IShoppingCart {
  setProductIdsInCart: (productIds: any) => void;
}

const ShoppingCart: React.FC<IShoppingCart> = ({ setProductIdsInCart }) => {
  return <h1>Shopping cart screen</h1>;
};

export default ShoppingCart;
