import React from "react";

interface IFinishedOrder {
  setProductIdsInCart: (productIds: any) => void;
}

const FinishedOrder: React.FC<IFinishedOrder> = ({ setProductIdsInCart }) => {
  return <h1>Finished order screen</h1>;
};

export default FinishedOrder;
