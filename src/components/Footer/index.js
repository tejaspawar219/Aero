import React from "react";
import {
  Container,
  Wrapper,
  SocialMedia,
  Address,
  FootLogo,
  Text,
} from "./Footer.styles";
import Logo from "../../assets/Logo.png";

function Footer(props) {
  return (
    <Container>
      <Wrapper>
        <Text>
          Contact <br />
          +91 94036 98076
          <br />
          +91 96992 91234
          <br />
          aerorgit@gmail.com
        </Text>
        <Address>
          <FootLogo src={Logo} />
          <Text>
            MCT's Rajiv Gandhi Institute of Technology Juhu Versova Link Rd.,
            behind HDFC Bank, Bharat Nagar, Versova, Andheri West, Mumbai -
            400053.
          </Text>
        </Address>
        <SocialMedia>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
        </SocialMedia>
      </Wrapper>
    </Container>
  );
}

export default Footer;
