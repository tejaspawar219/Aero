import React from 'react';
import { Container, Wrapper ,SocialMedia,Address, FootLogo,Text,Icon} from './Footer.styles';
import Logo from '../../assets/Logo.png'

function Footer(props) {
     return (
          <Container>
               <Wrapper>
                    <Text>
                         Contact <br/>
                         +91 94036 98076<br/>
                         +91 96992 91234<br/>
                         aerorgit@gmail.com
                    </Text>
                    <Address>
                         <FootLogo src={Logo}/>
                         <Text>
                              MCT's Rajiv Gandhi Institute of Technology
                              Juhu Versova Link Rd., behind HDFC Bank,
                              Bharat Nagar, Versova, Andheri West,
                              Mumbai - 400053.
                         </Text>
                    </Address>
                    <SocialMedia>
                         <i class="fas fa-envelope"></i>
                         <i class="fab fa-youtube"></i>
                         <i class="fab fa-instagram"></i>                         
                         <i class="fab fa-facebook"></i>
                    </SocialMedia>
               </Wrapper>
          </Container>
     );
}

export default Footer;