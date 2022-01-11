import React from 'react';
import  {Img,Summary,Text,Button, Container} from './HeroSection.styles.js'
import IMG_URL from '../../assets/aircraft.svg'
import {Wrapper,Content} from '../../pages/styles'

function HeroSection(props) {
     return (
          <Wrapper>
               <Container reverse={false}>
               <Img src={IMG_URL}/>
               <Summary>
                    <Content>
                         <Text>Aero-RGIT is one of the most versatile, passionate and hard-working team at RGIT striving for excellence. Our clubs promotes innovative ideas and skills by bringing together the brightest minds of the institute.</Text>
                         <Button>Join Us</Button>
                    </Content>
               </Summary>
               </Container>
          </Wrapper>
     );
}

export default HeroSection;