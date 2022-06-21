import React from "react";
import { Wrapper } from "../../pages/styles";
import ImgUrl from "../../assets/TechKriti.jpg";
import {
  Title,
  Text,
  Circle,
  InnerCircle,
  Line,
  TimeLineContent,
  TimeLine,
  Competition,
  LeftSpace,
  Content,
  Summary,
  CenterSpace,
  CompetitionImg,
} from "./Competitions.style";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import axios from "axios";
import { Modal } from "react-bootstrap";

function NewlineText(props) {
  const text = props.text;
  return text
    .split("\\n")
    .map((str) => (
      <div
        style={{
          display: "block",
          color: "white",
          fontWeight: props.b ? "700" : "500",
        }}
      >
        {str}
      </div>
    ));
}

const CompetitionSlide = ({ show, handleClose, competition }) => {
  const BaseUrl = "https://aero-server.herokuapp.com";
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res =
        competition.length !== 0
          ? await axios.get(BaseUrl + "/compimg/" + competition.id)
          : [];
      setImages(res.data);
    };
    fetchPosts();
  }, [competition, BaseUrl]);
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Carousel className="Slider">
        {images ? (
          images.map((item, index) => (
            <Carousel.Item interval={3000} key={index}>
              <img
                className="d-block w-100 "
                style={{ aspectRatio: "3/2", objectFit: "cover" }}
                src={BaseUrl + item.img}
                alt=""
              />
            </Carousel.Item>
          ))
        ) : (
          <></>
        )}
      </Carousel>
    </Modal>
  );
};

function Competitions() {
  const BaseUrl = "https://aero-server.herokuapp.com";
  const [show, setShow] = useState(false);
  const [competitions, setCompetitions] = useState([]);
  const [competition, setCompetition] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(BaseUrl + "/competition/");
      setCompetitions(res.data);
    };
    fetchPosts();
  }, [BaseUrl]);
  const handleClose = () => setShow(false);
  const handleSelectEvent = (index) => {
    setCompetition(competitions[index]);
  };

  return (
    <Wrapper>
      <CompetitionSlide
        show={show}
        handleClose={handleClose}
        competition={competition}
      />
      {competitions.map((comp, index) => {
        return (
          <Competition key={index}>
            <TimeLine>
              <TimeLineContent start={index === 0 ? true : false}>
                <Line
                  ends={
                    index === 0 || index === competitions.length - 1
                      ? true
                      : false
                  }
                />
                <Circle className="outer">
                  <p>{comp.year}</p>
                  <InnerCircle className="inner" />
                </Circle>
              </TimeLineContent>
            </TimeLine>
            <LeftSpace />
            <Content rev={index % 2 !== 0 ? true : false}>
              <Summary>
                <Title>{comp.competitionName}</Title>
                <Text>
                  <NewlineText text={comp.competitionDesc} />
                  <br />
                  <NewlineText b text={comp.achievements} />
                </Text>
              </Summary>
              <CenterSpace />
              <CompetitionImg
                src={comp.poster_img ? `${BaseUrl}${comp.poster_img}` : ImgUrl}
                onClick={() => {
                  handleSelectEvent(index);
                  setShow(true);
                }}
              />
            </Content>
          </Competition>
        );
      })}
    </Wrapper>
  );
}

export default Competitions;
