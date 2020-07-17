import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import {
  ShoppingCartIconBlock,
  ShoppingCartIconContainer,
} from "./shopping-cart-icon.style";

interface IShoppingCartIcon {
  productsInCart: number;
}

const ShoppingCartIcon: React.FC<IShoppingCartIcon> = ({ productsInCart }) => {
  return (
    <ShoppingCartIconBlock>
      <Link to="/shopping-cart">
        <ShoppingCartIconContainer>
          <ShoppingCartOutlined style={{ fontSize: 30 }} />
          <Text code style={{ fontSize: 20 }}>
            {productsInCart}
          </Text>
        </ShoppingCartIconContainer>
      </Link>
    </ShoppingCartIconBlock>
  );
};

export default ShoppingCartIcon;
