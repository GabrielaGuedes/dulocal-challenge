import React, { Fragment } from "react";
import {
  StyledTitle,
  CardsContainer,
  Card,
} from "../components/initial-screen/initial.style";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Text from "antd/lib/typography/Text";

const TEXT_STYLE = {
  color: "#79122f",
  fontSize: 20,
};

const Initial: React.FC = () => {
  return (
    <Fragment>
      <StyledTitle>Loja de Tudo</StyledTitle>
      <CardsContainer>
        <Card>
          <Text strong style={TEXT_STYLE}>
            Já sou cliente
          </Text>
          <div>
            <Button danger type="primary">
              <Link to="/login">Entrar</Link>
            </Button>
          </div>
        </Card>
        <Card>
          <Text strong style={TEXT_STYLE}>
            Quero comprar pela primeira vez
          </Text>
          <div>
            <Button danger type="primary">
              <Link to="/sign-up">Cadastrar-se</Link>
            </Button>
          </div>
        </Card>
      </CardsContainer>
    </Fragment>
  );
};

export default Initial;
