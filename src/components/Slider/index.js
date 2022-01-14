import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Heading, Line } from "../../pages/styles";
import { Wrapper } from "../../pages/styles";
import ImgPath1 from "../../assets/webinar.jpg";
import ImgPath2 from "../../assets/ansys_3.jpg";
import "./styles.css";

function Slider() {
  return (
    <Wrapper
      style={{ display: "block", padding: "10px auto", maxWidth: "920px" }}
    >
      <Heading>UpComing Events</Heading>
      <Line />
      <Carousel className="Slide" style={{ width: "95%", margin: "auto" }}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 "
            style={{ aspectRatio: "16/9" }}
            src={ImgPath1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={ImgPath2} alt="" />
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}

export default Slider;
