import React from "react";
import { Wrapper, Heading, Line } from "../../pages/styles";
import VisionCard from "../VisionCard";
import ImgPath1 from "../../assets/Undraw4.svg";
import ImgPath2 from "../../assets/Undraw5.svg";
import ImgPath3 from "../../assets/Undraw6.svg";

function Vision() {
  let text1 =
    "To expand the departmental students' exposure to interdisciplinary branches of engineering and to enhance some vital skills like ingenuity, discipline, determination, teamwork as well as communication and interpersonal skills.";
  let text2 =
    "To provide the students with multiple opportunities to enhance their Aero modelling and other relevant technical skills irrespective of the branch of engineering they study.";
  let text3 =
    "To nurture the students' initiative by taking ability in conjugation with the team work and puts their efforts in fruition by encouraging them to participate at various national level competitions.";
  return (
    <Wrapper>
      <Heading>Our Vision</Heading>
      <Line />
      <VisionCard reverse={true} text={text1} ImgPath={ImgPath1} />
      <VisionCard reverse={false} text={text2} ImgPath={ImgPath2} />
      <VisionCard reverse={true} text={text3} ImgPath={ImgPath3} />
    </Wrapper>
  );
}

export default Vision;
