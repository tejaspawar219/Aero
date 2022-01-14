import React, { useState } from "react";
import { Img, Summary, Text, Button, Container } from "./HeroSection.styles.js";
import IMG_URL from "../../assets/aircraft.svg";
import { Wrapper, Content } from "../../pages/styles";
import Register from "../Register/index.js";

function HeroSection(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Wrapper>
      <Container reverse={false}>
        <Img src={IMG_URL} />
        <Summary>
          <Content>
            <Text>
              Aero-RGIT is one of the most versatile, passionate and
              hard-working team at RGIT striving for excellence. Our clubs
              promotes innovative ideas and skills by bringing together the
              brightest minds of the institute.
            </Text>
            <Button onClick={handleShow}>Join Us</Button>
            <Register show={show} handleClose={handleClose} />
          </Content>
        </Summary>
      </Container>
    </Wrapper>
  );
}

export default HeroSection;
