import React, { Fragment } from "react";
import { Title } from "../components/common/title";
import groupBy from "lodash/groupBy";
import forEach from "lodash/forEach";
import ShoppingCartList from "../components/shopping-cart-screen/shopping-cart-list";
import PaymentMethodWithFinishButton from "../components/shopping-cart-screen/payment-method-with-finish-button";
import { TotalPriceContainer } from "../components/shopping-cart-screen/shopping-cart.style";

const ShoppingCart: React.FC = () => {
  const productsInCart = JSON.parse(
    localStorage.getItem("productsInCart") || "[]"
  );

  const productsGroupedById = groupBy(productsInCart, "id");
  const productsWithItsQuantity: any = [];

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

  return (
    <Fragment>
      <Title>Carrinho de compras</Title>
      <ShoppingCartList productsWithItsQuantity={productsWithItsQuantity} />
      <TotalPriceContainer>
        Total: R$
        {productsWithItsQuantity
          .reduce(
            (sumPrice: any, product: any) =>
              sumPrice + parseFloat(product.price),
            0
          )
          .toFixed(2)}
      </TotalPriceContainer>
      <PaymentMethodWithFinishButton />
    </Fragment>
  );
};

export default ShoppingCart;
