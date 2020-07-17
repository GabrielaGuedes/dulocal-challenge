import React, { Fragment, useState, useEffect } from "react";
import { getRequestInJSON } from "../utils/request";
import { ProductsListContainer } from "../components/products-list-screen/products-list.style";
import ProductCard from "../components/products-list-screen/product-card";
import { Title } from "../components/common/title";

export interface IProduct {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
}

interface IProductsList {
  setProductsInCart: (products: any) => void;
}

const PRODUCTS_SOURCE =
  "https://5d6da1df777f670014036125.mockapi.io/api/v1/product";

const ProductsList: React.FC<IProductsList> = ({ setProductsInCart }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getRequestInJSON(PRODUCTS_SOURCE).then((products: IProduct[]) =>
      setProducts(products)
    );
  }, []);

  return (
    <Fragment>
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
