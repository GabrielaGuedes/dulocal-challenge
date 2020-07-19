import styled from "styled-components";
import { COLORS } from "../../ui-constants/colors";

export const ListItemContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  border-bottom: 1px ${COLORS.orange} solid;
`;

export const ItemImageNameQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemNameQuantityContainer = styled.div`
  margin-left: 20px;
`;

export const ItemNameContainer = styled.div`
  font-size: 24px;
  color: ${COLORS.red};
  font-weight: 600;
`;

export const ItemQuantityContainer = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const ItemPriceContainer = styled.div`
  font-size: 20px;
  color: ${COLORS.green};
`;

export const TotalPriceContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  font-weight: bold;
`;
