import React, { Fragment } from "react";
import { Card } from "../components/login-screen/login.style";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  return (
    <Fragment>
      <Title>Entrar</Title>
      <Card>
        <Form
          {...layout}
          name="login"
          initialValues={{ remember: true }}
          onFinish={() => history.replace("/products-list")}
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              () => ({
                validator(_rule, value) {
                  if (value === CREDENTIALS.email) {
                    return Promise.resolve();
                  }
                  return Promise.reject("E-mail não cadastrado");
                },
              }),
            ]}
            validateTrigger="onSubmit"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              () => ({
                validator(_rule, value) {
                  if (value === CREDENTIALS.password) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Senha incorreta");
                },
              }),
            ]}
            validateTrigger="onSubmit"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" danger type="primary">
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Fragment>
  );
};

export default Login;
