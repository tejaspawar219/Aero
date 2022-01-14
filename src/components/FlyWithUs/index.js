import React, { useState } from "react";
import { Title } from "./FlyWithUs.styles";
import { Wrapper, Content } from "../../pages/styles";
import ImgPath from "../../assets/Fly.svg";
import {
  Button,
  Container,
  Summary,
  Img,
  Text,
} from "../HeroSection/HeroSection.styles";

import Register from "../Register/index.js";

function FlyWithUs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Wrapper>
      <Container reverse={true}>
        <Summary>
          <Content>
            <Title>Fly with us</Title>
            <Text>
              Moulding students to dare and flaunt their wings and achieve
              heights!
            </Text>
            <Button onClick={handleShow}>Join Us</Button>
            <Register show={show} handleClose={handleClose} />
          </Content>
        </Summary>
        <Img src={ImgPath} />
      </Container>
    </Wrapper>
  );
}

export default FlyWithUs;
