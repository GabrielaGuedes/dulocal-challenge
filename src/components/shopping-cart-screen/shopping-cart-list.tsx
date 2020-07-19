import React, { Fragment } from "react";
import {
  ListItemContainer,
  ItemImageNameQuantityContainer,
  ItemNameQuantityContainer,
  ItemNameContainer,
  ItemPriceContainer,
} from "./shopping-cart.style";
import ItemQuantity from "./item-quantity";
import { IProductInShoppingCartList } from "../../pages/shopping-cart";

interface IShoppingCartList {
  productsWithItsQuantity: IProductInShoppingCartList[];
  setSumPrice: (price: string) => void;
}

const ShoppingCartList: React.FC<IShoppingCartList> = ({
  productsWithItsQuantity,
  setSumPrice,
}) => {
  return (
    <Fragment>
      {productsWithItsQuantity.map((product: IProductInShoppingCartList) => (
        <ListItemContainer key={product.id + product.name}>
          <ItemImageNameQuantityContainer>
            <img
              src={product.image}
              alt="product-pic"
              width={160}
              height={120}
            />
            <ItemNameQuantityContainer>
              <ItemNameContainer>{product.name}</ItemNameContainer>
              <ItemQuantity product={product} setSumPrice={setSumPrice} />
            </ItemNameQuantityContainer>
          </ItemImageNameQuantityContainer>
          <ItemPriceContainer>R$ {product.price}</ItemPriceContainer>
        </ListItemContainer>
      ))}
    </Fragment>
  );
};

export default ShoppingCartList;
