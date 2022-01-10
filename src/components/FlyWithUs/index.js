import React from 'react';
import { Container, Wrapper ,Img,Summary,Title,Text} from './FlyWithUs.styles';
import ImgPath from '../../assets/Fly.svg'
import {Button } from '../HeroSection/HeroSection.styles'


function FlyWithUs() {
     return (
          <Container>
               <Wrapper>
                    <Summary>
                         <Title>Fly with us</Title>
                         <Text>Moulding students to dare and flaunt their wings and achieve heights!</Text>
                         <Button>Join Us</Button>
                    </Summary>
                    <Img src={ImgPath}/>
               </Wrapper>
          </Container>
     );
}

export default FlyWithUs;