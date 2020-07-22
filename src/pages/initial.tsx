import React, { Fragment, useEffect } from "react";
import {
  StyledTitle,
  CardsContainer,
  Card,
} from "../components/initial-screen/initial.style";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import Text from "antd/lib/typography/Text";
import { COLORS } from "../ui-constants/colors";

const TEXT_STYLE = {
  color: COLORS.red,
  fontSize: 20,
};

const Initial: React.FC = () => {
  const history = useHistory();
  const isLogged = localStorage.getItem("logged") === "true";

  useEffect(() => {
    isLogged && history.replace("/products-list");
  }, []);

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
