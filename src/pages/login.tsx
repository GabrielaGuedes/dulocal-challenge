import React, { Fragment, useState } from "react";
import { Card } from "../components/login-screen/login.style";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { Title } from "../components/common/title";

const CREDENTIALS = {
  email: "cliente@gmail.com",
  password: "senha",
};

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const Login: React.FC = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const validateEmail = (_rule: any, value: any) => {
    setValidEmail(value === CREDENTIALS.email);
  };

  const validatePassword = (_rule: any, value: any) => {
    setValidPassword(value === CREDENTIALS.password);
  };

  const onClick = () => {
    if (!validEmail) {
      alert("Email não cadastrado");
    } else if (validEmail && !validPassword) {
      alert("Senha inválida");
    }
  };

  return (
    <Fragment>
      <Title>Entrar</Title>
      <Card>
        <Form {...layout} name="login" initialValues={{ remember: true }}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                validator: validateEmail,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ validator: validatePassword }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" onClick={onClick} danger type="primary">
              {validEmail && validPassword ? (
                <Link to="/products-list">Entrar</Link>
              ) : (
                "Entrar"
              )}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Fragment>
  );
};

export default Login;
