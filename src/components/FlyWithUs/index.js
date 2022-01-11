import React from 'react';
import {Title} from './FlyWithUs.styles'
import {Wrapper,Content} from '../../pages/styles'
import ImgPath from '../../assets/Fly.svg'
import {Button,Container,Summary,Img,Text } from '../HeroSection/HeroSection.styles'


function FlyWithUs() {
     return (
               <Wrapper>
                    <Container reverse={true}>
                         <Summary>
                              <Content>
                              <Title>Fly with us</Title>
                              <Text>Moulding students to dare and flaunt their wings and achieve heights!</Text>
                              <Button>Join Us</Button>
                              </Content>
                         </Summary>
                         <Img src={ImgPath}/>
                    </Container>
               </Wrapper>
     );
}

export default FlyWithUs;