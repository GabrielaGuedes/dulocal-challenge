import React from "react";
import {
  StyledTitle,
  StyledPage,
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
    <StyledPage>
      <StyledTitle>Loja de Tudo</StyledTitle>
      <CardsContainer>
        <Card>
          <Text strong style={TEXT_STYLE}>
            Já sou cliente
          </Text>
          <Link to="/login">
            <Button>Entrar</Button>
          </Link>
        </Card>
        <Card>
          <Text strong style={TEXT_STYLE}>
            Quero comprar pela primeira vez
          </Text>
          <Link to="/sign-up">
            <Button>Cadastrar-se</Button>
          </Link>
        </Card>
      </CardsContainer>
    </StyledPage>
  );
};

export default Initial;
