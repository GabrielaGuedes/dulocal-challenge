import React, { Fragment } from "react";
import { Title } from "../components/common/title";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { PayedPriceTextContainer } from "../components/finished-order/finished-order.style";

const FinishedOrder: React.FC = () => {
  const productsBought = JSON.parse(
    localStorage.getItem("productsInCart") || "[]"
  );
  const payedPrice = productsBought
    .reduce(
      (sumPrice: any, product: any) => sumPrice + parseFloat(product.price),
      0
    )
    .toFixed(2);
  localStorage.clear();

  return (
    <Fragment>
      <Title>Pedido realizado!</Title>
      <PayedPriceTextContainer>
        Valor total pago: R$ {payedPrice}
      </PayedPriceTextContainer>
      <Button danger type="primary">
        <Link to="/products-list">Voltar para tela dos produtos</Link>
      </Button>
    </Fragment>
  );
};

export default FinishedOrder;
