import React, { useState } from "react";
import { Select, Row, Col, Button, Form } from "antd";
import { Link, useHistory } from "react-router-dom";

const AVAILABLE_PAYMENT_METHODS = [
  {
    label: "Transferência",
    value: "transfer",
  },
  {
    label: "Boleto",
    value: "billet",
  },
];

const PaymentMethodWithButtons: React.FC = () => {
  const history = useHistory();
  const productsInCart = JSON.parse(
    localStorage.getItem("productsInCart") || "[]"
  );

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (_value: string, option: any) => {
    setPaymentMethod(option.label);
  };

  const handleFinish = () => {
    productsInCart.length > 0
      ? history.replace("/finished-order")
      : alert("Seu carrinho está vazio!");
  };

  return (
    <Col style={{ justifyContent: "flex-start", paddingLeft: 30 }}>
      <Form onFinish={handleFinish}>
        <Row align="middle">
          <Form.Item
            label="Método de pagamento"
            name="paymentMethod"
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Select
              style={{ minWidth: "150px", marginLeft: 10 }}
              options={AVAILABLE_PAYMENT_METHODS}
              onChange={handleChange}
              value={paymentMethod}
            />
          </Form.Item>
        </Row>
        <Row>
          {paymentMethod &&
            `As informações de pagamento por ${paymentMethod.toLowerCase()} serão
      enviadas por e-mail.`}
        </Row>
        <Button danger style={{ marginRight: 10 }}>
          <Link to="/products-list">Voltar e continuar comprando</Link>
        </Button>
        <Button danger type="primary" htmlType="submit">
          Finalizar pedido
        </Button>
      </Form>
    </Col>
  );
};

export default PaymentMethodWithButtons;
