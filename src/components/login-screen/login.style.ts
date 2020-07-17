import styled from "styled-components";
import { COLORS } from "../../ui-constants/colors";

export const Card = styled.div`
  margin: 30px 25% 0px;
  background-color: ${COLORS.lightYellow};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px 15px 0px;
  border-radius: 3px;
  border: gray 0.5px solid;
`;
