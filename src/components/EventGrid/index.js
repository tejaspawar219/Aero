import React,{useState} from 'react';
import {Modal} from 'react-bootstrap'
import {Wrapper,Heading,Line} from '../../pages/styles'
import {More,EventHeading,Container,Event,EventImg,EventName,EventContent} from './EventGrid.styles'
import ImgUrl from '../../assets/webinar.jpg'
import ImgPath1 from "../../assets/webinar.jpg";
import ImgPath2 from "../../assets/ansys_3.jpg";
import Carousel from "react-bootstrap/Carousel";

import Data from '../../assets/workshops.json'
import { Button } from '../HeroSection/HeroSection.styles';

function NewlineText(props) {
  const text = props.text;
  return text.split('\\n').map(str => <p>{str}</p>);
}

const EventInfo=({ show, handleClose, showId})=>{
  const workshop = Data[showId-1];
  return(
  <Modal show={show} onHide={handleClose} centered size='md' >
    <Carousel className="Slider" >
      {[ImgPath1,ImgPath2].map((item,index) => (
        <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          style={{ aspectRatio: "3/2",objectFit:"cover" }}
          src={item}
          alt=""
        />
      </Carousel.Item>
      ))}
      </Carousel>
      <Button style={{width:"50px",height:"50px",borderRadius:"50%",position:"absolute",top:"10px",right:"10px"}}>X</Button>
      
      <EventContent>
        <EventHeading>{workshop.title}</EventHeading>
        <i>{workshop.date}</i><br/>
        <i>{workshop.venue}</i><br/>
        <b>Guest Speaker: </b><NewlineText text={workshop.speaker} /><br/>
        <NewlineText text = {workshop.description} />
      </EventContent>
  </Modal>
  )
}

function EventGrid() {
  const [show, setShow] = useState(false);
  const [showId,setShowId] = useState(1)

  const handleClose = () => setShow(false);
  const handleShow = (id) => {setShow(true);setShowId(id)};
  return <Wrapper>
    <EventInfo show={show} handleClose={handleClose} showId={showId}/>
    <Heading>Events Conducted</Heading>
    <Line/>
    <Container>

      {Data.map((workshop) => {

        return(        
        <Event key={workshop.id} onClick={()=> handleShow(workshop.id)}>
          <EventImg src={ImgUrl}/>
          <EventName>{workshop.title}</EventName>
          <More className='more'>More Info</More>
        </Event>
        )
      
      })}
    </Container>
  </Wrapper>;
}



export default EventGrid;
