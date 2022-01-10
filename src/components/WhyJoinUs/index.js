import React from 'react';
import { Container, Text, Section, Wrapper,Title } from '../WhyJoinUs/WhyJoinUs.styles';


function WhyJoinUs() {
     return (
          <Container>
               <Wrapper>
                    <Title>Why Join Us?</Title>
               </Wrapper>
               <Wrapper>
                    <Section>
                         <i class="fas fa-book-open"></i>
                         <Text>To enhance your technical knowledge and apply it for practical purpose</Text>
                    </Section>
                    <Section>
                         <i class="fas fa-plane-departure"></i>
                         <Text>Get Hands-on knowledge on How to Design, Manufacture and Fly RC Planes and Drones</Text>
                    </Section>
                    <Section>
                         <i class="fas fa-compass"></i>    
                         <Text>Explore the field of Aerospace Engineering at it's basic level</Text>                
                    </Section>
                    <Section>
                         <i class="fas fa-badge-check"></i>
                         <Text>Validate your skills through certificate and participation in various competitions</Text>
                    </Section>
               </Wrapper>
          </Container>
     );
}

export default WhyJoinUs;