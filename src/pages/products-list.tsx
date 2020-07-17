import React from "react";

interface IProductsList {
  setProductIdsInCart: (productIds: any) => void;
}

const ProductsList: React.FC<IProductsList> = ({ setProductIdsInCart }) => {
  return <h1>Products List screen</h1>;
};

export default ProductsList;
