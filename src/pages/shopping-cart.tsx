import React, { Fragment, useState, useEffect } from "react";
import { Title } from "../components/common/title";
import groupBy from "lodash/groupBy";
import forEach from "lodash/forEach";
import ShoppingCartList from "../components/shopping-cart-screen/shopping-cart-list";
import PaymentMethodWithButtons from "../components/shopping-cart-screen/payment-method-with-buttons";
import { TotalPriceContainer } from "../components/shopping-cart-screen/shopping-cart.style";
import { useHistory } from "react-router-dom";

export interface IProductInShoppingCartList {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const history = useHistory();
  const isLogged = localStorage.getItem("logged") === "true";

  const productsInCart = JSON.parse(
    localStorage.getItem("productsInCart") || "[]"
  );
  const productsGroupedById = groupBy(productsInCart, "id");
  const productsWithItsQuantity: IProductInShoppingCartList[] = [];

  useEffect(() => {
    isLogged || history.replace("/");
  }, []);

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
      <PaymentMethodWithButtons />
    </Fragment>
  );
};

export default ShoppingCart;
