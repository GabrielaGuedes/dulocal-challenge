import React, { Fragment } from "react";
import { Button } from "antd";
import {
  ListItemContainer,
  ItemImageNameQuantityContainer,
  ItemNameQuantityContainer,
  ItemNameContainer,
  ItemQuantityContainer,
  ItemPriceContainer,
} from "./shopping-cart.style";

interface IShoppingCartList {
  productsWithItsQuantity: [];
}

const ShoppingCartList: React.FC<IShoppingCartList> = ({
  productsWithItsQuantity,
}) => {
  return (
    <Fragment>
      {productsWithItsQuantity.map((product: any) => (
        <ListItemContainer>
          <ItemImageNameQuantityContainer>
            <img
              src={product.image}
              alt="product-pic"
              width={160}
              height={120}
            />
            <ItemNameQuantityContainer>
              <ItemNameContainer>{product.name}</ItemNameContainer>
              <ItemQuantityContainer>
                Quantidade:{" "}
                <Button
                  style={{ margin: "0px 5px 0px 10px" }}
                  shape="circle"
                  size="small"
                  type="primary"
                >
                  -
                </Button>
                {product.quantity}
                <Button
                  style={{ marginLeft: 5 }}
                  shape="circle"
                  size="small"
                  type="primary"
                >
                  +
                </Button>
              </ItemQuantityContainer>
            </ItemNameQuantityContainer>
          </ItemImageNameQuantityContainer>
          <ItemPriceContainer>R$ {product.price}</ItemPriceContainer>
        </ListItemContainer>
      ))}
    </Fragment>
  );
};

export default ShoppingCartList;
