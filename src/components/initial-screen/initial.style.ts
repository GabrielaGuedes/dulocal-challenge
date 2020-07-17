import styled from "styled-components";
import { COLORS } from "../../ui-constants/colors";

export const StyledTitle = styled.div`
  font-size: 80px;
  font-weight: bold;
  color: ${COLORS.green};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Card = styled.div`
  width: 100%;
  margin: 0px 10px;
  background-color: ${COLORS.orange};
  color: ${COLORS.red};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  border-radius: 3px;
`;
