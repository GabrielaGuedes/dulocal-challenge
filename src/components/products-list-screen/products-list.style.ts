import styled from "styled-components";

export const ProductsListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledProductCard = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  background-color: #f7a827;
  padding-bottom: 10px;
`;

export const ProductCardDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #79122f;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #1d7f35;
`;
