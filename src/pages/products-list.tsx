import React, { Fragment, useState, useEffect } from "react";
import { getRequestInJSON } from "../utils/request";
import { ProductsListContainer } from "../components/products-list-screen/products-list.style";
import ProductCard from "../components/products-list-screen/product-card";
import { Title } from "../components/common/title";
import ShoppingCartIcon from "../components/common/shopping-cart-icon";
import { useHistory } from "react-router-dom";

export interface IProduct {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
}

const PRODUCTS_SOURCE =
  "https://5d6da1df777f670014036125.mockapi.io/api/v1/product";

const ProductsList: React.FC = () => {
  const history = useHistory();
  const isLogged = localStorage.getItem("logged") === "true";

  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("productsInCart") || "[]")
  );

  useEffect(() => {
    isLogged
      ? getRequestInJSON(PRODUCTS_SOURCE).then((products: IProduct[]) =>
          setProducts(products)
        )
      : history.replace("/");
  }, []);

  return (
    <Fragment>
      <ShoppingCartIcon productsInCart={productsInCart.length} />
      <Title>Nossos Produtos</Title>
      <ProductsListContainer>
        {products.map((product) => (
          <ProductCard
            product={product}
            setProductsInCart={setProductsInCart}
          />
        ))}
      </ProductsListContainer>
    </Fragment>
  );
};

export default ProductsList;
