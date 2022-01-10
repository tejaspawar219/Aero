import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import {Wrapper} from '../../pages/styles'
import ImgPath1 from '../../assets/webinar.jpg'
import ImgPath2 from '../../assets/ansys_3.jpg'
import './styles.css'
  
function Slider() {
  return (
    <Wrapper style={{ display: 'block'}} >
      <Carousel  prevIcon={false} nextIcon = {false} className='Slide'>
        <Carousel.Item interval={3000} >
            <img className="d-block w-100 " style={{height:'600px'}} src={ImgPath1} alt="Image One"/>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img className="d-block w-100" style={{height:'600px'}} src={ImgPath2} alt="Image Two"/>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}

export default Slider