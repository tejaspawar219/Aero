import React from 'react';
import  {Container,Wrapper,Img,Summary,Text,Button} from './HeroSection.styles.js'
import IMG_URL from '../../assets/aircraft.svg'

function HeroSection(props) {
     return (
          <Container>
               <Wrapper>
                    <Img src={IMG_URL}/>
                    <Summary>
                         <Text>Aero-RGIT is one of the most versatile, passionate and hard-working team at RGIT striving for excellence. Our clubs promotes innovative ideas and skills by bringing together the brightest minds of the institute.</Text>
                         <Button>Join Us</Button>
                    </Summary>
               </Wrapper>
          </Container>
     );
}

export default HeroSection;