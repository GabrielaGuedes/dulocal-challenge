import React from "react";
import { IProduct } from "../../pages/products-list";
import {
  StyledProductCard,
  ProductName,
  ProductCardDescriptionContainer,
  AddToCartContainer,
  Price,
} from "./products-list.style";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";

interface IProductCard {
  product: IProduct;
  setProductsInCart: (products: any) => void;
}

const Product: React.FC<IProductCard> = ({ product, setProductsInCart }) => {
  const handleClick = () => {
    setProductsInCart((productsInCart: string[]) => {
      localStorage.setItem(
        "productsInCart",
        JSON.stringify([...productsInCart, product])
      );
      return [...productsInCart, product];
    });
  };

  return (
    <StyledProductCard>
      <img src={product.image} alt="product-pic" width={320} height={240} />
      <ProductName>{product.name}</ProductName>
      <ProductCardDescriptionContainer>
        <AddToCartContainer>
          <ShoppingCartOutlined style={{ fontSize: 30, marginRight: 5 }} />
          <Tooltip title="Adicionar ao carrinho">
            <Button
              type="primary"
              shape="circle"
              size="small"
              onClick={handleClick}
            >
              +
            </Button>
          </Tooltip>
        </AddToCartContainer>
        <Price>R$ {product.price}</Price>
      </ProductCardDescriptionContainer>
    </StyledProductCard>
  );
};

export default Product;
