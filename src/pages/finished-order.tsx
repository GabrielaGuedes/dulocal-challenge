import React, { Fragment, useEffect } from "react";
import { Title } from "../components/common/title";
import { Button, Row } from "antd";
import { Link, useHistory } from "react-router-dom";
import { PayedPriceTextContainer } from "../components/finished-order/finished-order.style";

const FinishedOrder: React.FC = () => {
  const history = useHistory();
  const isLogged = localStorage.getItem("logged") === "true";

  useEffect(() => {
    isLogged || history.replace("/");
  }, []);

  const productsBought = JSON.parse(
    localStorage.getItem("productsInCart") || "[]"
  );

  const payedPrice = productsBought
    .reduce(
      (sumPrice: any, product: any) => sumPrice + parseFloat(product.price),
      0
    )
    .toFixed(2);

  localStorage.removeItem("productsInCart");

  const handleFinishSessionClick = () => {
    localStorage.clear();
    history.replace("/");
  };

  return (
    <Fragment>
      <Title>Pedido realizado!</Title>
      <PayedPriceTextContainer>
        Valor total pago: R$ {payedPrice}
      </PayedPriceTextContainer>
      <Button
        danger
        style={{ marginRight: 10 }}
        onClick={handleFinishSessionClick}
      >
        Encerrar sessão
      </Button>
      <Button danger type="primary">
        <Link to="/products-list">Voltar para tela dos produtos</Link>
      </Button>
    </Fragment>
  );
};

export default FinishedOrder;
