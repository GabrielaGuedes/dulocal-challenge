import React, { useState, useEffect } from "react";
import { Select, Row, Col, Button, Form } from "antd";
import { Link } from "react-router-dom";

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
  useEffect(() => {
    localStorage.setItem("paymentMethod", "");
  }, []);

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (_value: string, option: any) => {
    localStorage.setItem("paymentMethod", option.label);
    setPaymentMethod(option.label);
  };

  return (
    <Col style={{ justifyContent: "flex-start", paddingLeft: 30 }}>
      <Form>
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
          {localStorage.getItem("paymentMethod") !== "" ? (
            <Link to="/finished-order">Finalizar pedido</Link>
          ) : (
            "Finalizar pedido"
          )}
        </Button>
      </Form>
    </Col>
  );
};

export default PaymentMethodWithButtons;
