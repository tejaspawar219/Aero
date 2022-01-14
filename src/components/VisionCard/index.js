import React from "react";
import { Card, Img, Summary } from "./VisionCard.styles";
function VisionCard(props) {
  return (
    <>
      <Card reverse={props.reverse}>
        <Summary>{props.text}</Summary>
        <Img src={props.ImgPath} alt="hey" />
      </Card>
    </>
  );
}

export default VisionCard;
