import React, { Fragment } from "react";
import { Title } from "../components/common/title";
import { Form, Input, Button, DatePicker } from "antd";
import { isCpfValid } from "../utils/cpf-validator";

const SignUp: React.FC = () => {
  return (
    <Fragment>
      <Title>Cadastre-se!</Title>
      <Form>
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
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="CPF (sem pontos ou traços, apenas números)"
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
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Realizar cadastro</Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default SignUp;
