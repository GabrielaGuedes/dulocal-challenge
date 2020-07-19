import React, { Fragment, useState } from "react";
import { Title } from "../components/common/title";
import groupBy from "lodash/groupBy";
import forEach from "lodash/forEach";
import ShoppingCartList from "../components/shopping-cart-screen/shopping-cart-list";
import PaymentMethodWithFinishButton from "../components/shopping-cart-screen/payment-method-with-finish-button";
import { TotalPriceContainer } from "../components/shopping-cart-screen/shopping-cart.style";

export interface IProductInShoppingCartList {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const productsInCart = JSON.parse(
    localStorage.getItem("productsInCart") || "[]"
  );
  const productsGroupedById = groupBy(productsInCart, "id");
  const productsWithItsQuantity: IProductInShoppingCartList[] = [];

  forEach(productsGroupedById, (key) => {
    const { id, name, price, image } = key[0];
    productsWithItsQuantity.push({
      id,
      name,
      image,
      price,
      quantity: key.length,
    });
  });
  const [sumPrice, setSumPrice] = useState(
    productsWithItsQuantity
      .reduce(
        (sumPrice: any, product: any) =>
          sumPrice + parseFloat(product.price) * product.quantity,
        0
      )
      .toFixed(2)
  );

  return (
    <Fragment>
      <Title>Carrinho de compras</Title>
      <ShoppingCartList
        productsWithItsQuantity={productsWithItsQuantity}
        setSumPrice={setSumPrice}
      />
      <TotalPriceContainer>
        Total: R$
        {sumPrice}
      </TotalPriceContainer>
      <PaymentMethodWithFinishButton />
    </Fragment>
  );
};

export default ShoppingCart;
