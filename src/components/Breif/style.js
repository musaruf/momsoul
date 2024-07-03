import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background-color: #fbf0f4;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ marginTop: "20px" })}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "50px" })}
`;

export const Desc = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  width: 60%;
  ${mobile({ textAlign: "center", fontSize: "18px" })}
`;
