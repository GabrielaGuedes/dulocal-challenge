import React, { Fragment } from "react";
import { Title } from "../components/common/title";
import { Form, Input, Button, DatePicker } from "antd";
import { isCpfValid } from "../utils/cpf-validator";
import { Card } from "../components/login-screen/login.style";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const SignUp: React.FC = () => {
  const history = useHistory();

  return (
    <Fragment>
      <Title>Cadastre-se!</Title>
      <Card>
        <Form {...layout} onFinish={() => history.replace("/products-list")}>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { type: "email", message: "E-mail inválido" },
              { required: true, message: "Campo obrigatório" },
            ]}
            validateTrigger="onBlur"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="password-confirmation"
            label="Confirme a senha"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Campo obrigatório" },
              ({ getFieldValue }) => ({
                validator(_rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("As senhas digitadas são diferentes");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Data de nascimento"
            name="birthdate"
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <DatePicker style={{ textAlign: "left", display: "block" }} />
          </Form.Item>
          <Form.Item
            label="CPF (só números)"
            name="cpf"
            rules={[
              { required: true, message: "Campo obrigatório" },
              () => ({
                validator(_rule, value) {
                  if (isCpfValid(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject("CPF inválido");
                },
              }),
            ]}
            validateTrigger="onBlur"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" danger type="primary">
              Realizar cadastro
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Fragment>
  );
};

export default SignUp;
