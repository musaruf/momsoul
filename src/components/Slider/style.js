import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // background-color: coral;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e6d8cb;

  //? Inside div alignment
  display: flex;
  justify-content: center;
  align-items: center;

  //? To vertically make center to overall parent Div
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;

  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
`;
export const ImgContainer = styled.div`
  height: 80%;
  flex: 1;
  border-top-right-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-top-right-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;

  object-fit: cover;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 10px;
  background-color: transparent;
  cursor: pointer;
`;
