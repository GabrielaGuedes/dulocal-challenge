import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Text from "antd/lib/typography/Text";

const ShoppingCartIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface IShoppingCartIcon {
  productsInCart: number;
}

const ShoppingCartIcon: React.FC<IShoppingCartIcon> = ({ productsInCart }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Link to="/shopping-cart">
        <ShoppingCartIconContainer>
          <ShoppingCartOutlined style={{ fontSize: 30 }} />
          <Text code style={{ fontSize: 20 }}>
            {productsInCart}
          </Text>
        </ShoppingCartIconContainer>
      </Link>
    </div>
  );
};

export default ShoppingCartIcon;
