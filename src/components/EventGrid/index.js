import React,{useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap'
import {Wrapper,Heading,Line} from '../../pages/styles'
import {More,EventHeading,Container,Event,EventImg,EventName,EventContent} from './EventGrid.styles'
import Carousel from "react-bootstrap/Carousel";
import axios from 'axios'
import { Button } from '../HeroSection/HeroSection.styles';

function NewlineText(props) {
  const text = props.text;
  return text.split('\\n').map(str => <p>{str}</p>);
}

const EventInfo=({ show, handleClose, event})=>{
  const ImgBaseUrl=process.env.IMAGEBASEURL;
  const BaseUrl=process.env.BASEURL;
  const [images,setImages]=useState([])
  useEffect(() => {
    const fetchPosts=async ()=>{
        const res=event.length!==0?await axios.get(BaseUrl+"eveimg/"+event.id):[];
        setImages(res.data)
    }
    fetchPosts()
  },[event,BaseUrl])

  return(
  <Modal show={show} onHide={handleClose} centered size='md' >
    <Carousel className="Slider" >
      {
        images?
        images.map((item,index) => (
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 "
            style={{ aspectRatio: "3/2",objectFit:"cover" }}
            src={ImgBaseUrl+item.img_id}
            alt=""
          />
        </Carousel.Item>
        )):<></>
      }
      </Carousel>
      <Button style={{width:"50px",height:"50px",borderRadius:"50%",position:"absolute",top:"10px",right:"10px",zIndex:"10"}} onClick={handleClose}>X</Button>
      
      <EventContent>
        <EventHeading>{event.eventname}</EventHeading>
        <i>{event.eventdate}</i><br/>
        <i>{event.venue}</i><br/>
        <b>Guest Speaker: </b><NewlineText text={event.speaker} /><br/>
        <NewlineText text={event.eventdesc} />
      </EventContent>
  </Modal>
  )
}

function EventGrid() {
  const BaseUrl=process.env.BASEURL;
  const ImgBaseUrl=process.env.IMAGEBASEURL;
  const [show, setShow] = useState(false);
  const [event,setEvent] = useState([])

  const [workshops,setWorkshops]=useState([])
  
  useEffect(() => {
    const fetchPosts=async ()=>{
        const res=await axios.get(BaseUrl+"/event/");
        console.log(BaseUrl)
        console.log(res.data)
        setWorkshops(res.data)
    }
    fetchPosts()
  },[BaseUrl])

  const handleClose = () => setShow(false);
  const handleSelectEvent = (index) => {setEvent(workshops[index])};

  return <Wrapper>
    <EventInfo show={show} handleClose={handleClose} event={event} />
    <Heading>Events Conducted</Heading>
    <Line/>
    <Container>

      {workshops.map((workshop,index) => {

        return(        
        <Event key={workshop.id} onClick={()=>{ handleSelectEvent(index);setShow(true)}}>
          <EventImg src={ImgBaseUrl+workshop.poster_img_id}/>
          <EventName>{workshop.eventname}</EventName>
          <More className='more'>More Info</More>
        </Event>
        )
      
      })}
    </Container>
  </Wrapper>;
}



export default EventGrid;
