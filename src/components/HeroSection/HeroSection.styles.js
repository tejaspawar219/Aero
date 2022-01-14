import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 750px) {
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  }
`;

export const Img = styled.img`
  width: 45%;
  padding: 50px 0;
  @media only screen and (max-width: 750px) {
    padding: 30px 20px;
    width: 90%;
    text-align: center;
  }
`;

export const Summary = styled.div`
  width: 55%;
  padding-left: 74px;
  color: white;
  font-size: 22px;
  @media only screen and (max-width: 750px) {
    padding: 0;
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.div`
  margin-bottom: 30px;
`;

export const Button = styled.button`
  color: white;
  border-radius: 10px;
  background-color: #8800ff;
  height: 63px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  border: 0px;
  cursor: pointer;
  :hover {
    background-color: #9d2dff;
  }
  @media only screen and (max-width: 1000px) {
    height: 50px;
    width: 120px;
    font-size: 19px;
  }
  @media only screen and (max-width: 750px) {
    margin: auto;
  }
  @media only screen and (max-width: 500px) {
    margin: auto;
    height: 50px;
    width: 120px;
    font-size: 19px;
  }
`;
