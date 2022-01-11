import React from 'react';
import { Line,Wrapper ,Content} from '../../pages/styles';
import { Container, Text, Section,Group ,Title} from '../WhyJoinUs/WhyJoinUs.styles';


function WhyJoinUs() {
     return (
          <Content>
               <Wrapper>
                    <Title>Why Join Us?</Title>
                    <Line/>
                    <Container>
                    <Group>
                         <Section>
                              <i class="fas fa-book-open"></i>
                              <Text>To enhance your technical knowledge and apply it for practical purpose</Text>
                         </Section>
                         <Section>
                              <i class="fas fa-plane-departure"></i>
                              <Text>Get Hands-on knowledge on How to Design, Manufacture and Fly RC Planes and Drones</Text>
                         </Section>
                    </Group>
                    <Group>
                         <Section>
                              <i class="fas fa-compass"></i>    
                              <Text>Explore the field of Aerospace Engineering at it's basic level</Text>                
                         </Section>
                         <Section>
                              <i class="fas fa-badge-check"></i>
                              <Text>Validate your skills through certificate and participation in various competitions</Text>
                         </Section>
                    </Group>
                    </Container>
               </Wrapper>
          </Content>
     );
}

export default WhyJoinUs;