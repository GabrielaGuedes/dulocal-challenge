import React, { useState } from "react";
import { ItemQuantityContainer } from "./shopping-cart.style";
import { Button } from "antd";
import { IProductInShoppingCartList } from "../../pages/shopping-cart";

interface IItemQuantity {
  product: IProductInShoppingCartList;
  setSumPrice: (price: any) => void;
}

const ItemQuantity: React.FC<IItemQuantity> = ({ product, setSumPrice }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleAddClick = () => {
    const productsInCart = JSON.parse(
      localStorage.getItem("productsInCart") || "[]"
    );

    localStorage.setItem(
      "productsInCart",
      JSON.stringify([...productsInCart, product])
    );
    setQuantity(quantity + 1);
    setSumPrice((oldPrice: string) =>
      (parseFloat(oldPrice) + parseFloat(product.price)).toFixed(2)
    );
  };

  const handleRemoveClick = () => {
    const productsInCart = JSON.parse(
      localStorage.getItem("productsInCart") || "[]"
    );

    const indexProductToBeRemoved = productsInCart.findIndex(
      (productInCart: IProductInShoppingCartList) =>
        productInCart.id === product.id
    );
    productsInCart.splice(indexProductToBeRemoved, 1);

    localStorage.setItem("productsInCart", JSON.stringify([...productsInCart]));
    setQuantity(quantity - 1);
    setSumPrice((oldPrice: string) =>
      (parseFloat(oldPrice) - parseFloat(product.price)).toFixed(2)
    );
  };

  return (
    <ItemQuantityContainer>
      Quantidade:{" "}
      <Button
        style={{ margin: "0px 5px 0px 10px" }}
        shape="circle"
        size="small"
        type="primary"
        disabled={quantity === 0}
        onClick={handleRemoveClick}
      >
        -
      </Button>
      {quantity}
      <Button
        style={{ marginLeft: 5 }}
        shape="circle"
        size="small"
        type="primary"
        onClick={handleAddClick}
      >
        +
      </Button>
    </ItemQuantityContainer>
  );
};

export default ItemQuantity;
