import React from "react";

interface IFinishedOrder {
  setProductsInCart: (products: any) => void;
}

const FinishedOrder: React.FC<IFinishedOrder> = ({ setProductsInCart }) => {
  return <h1>Finished order screen</h1>;
};

export default FinishedOrder;
