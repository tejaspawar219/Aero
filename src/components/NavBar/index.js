import React from 'react';
import { Container, Wrapper, Logo, NavLinks } from './NavBar.styles';
import LogoImg from '../../assets/Logo.png'
import {Navbar,Nav} from 'react-bootstrap'

function index(props) {
     return (
          <div>
               <Container>
                    <Wrapper>
                         <Navbar variant='dark' expand='lg' style={{width:'100%'}}>
                              <Navbar.Brand>
                                   <a href='/'><Logo src={LogoImg}/></a>
                              </Navbar.Brand>
                              <Navbar.Toggle style={{height:'60px',width:'60px'}} />
                              <Navbar.Collapse style={{justifyContent:'flex-end'}}>
                                   <Nav>
                                        <Nav.Link style={{fontSize:'20px',padding:'10px 16px'}}>Our Team</Nav.Link>
                                        <Nav.Link href='/aboutus' style={{fontSize:'20px',padding:'10px 16px'}}>About Us</Nav.Link>
                                        <Nav.Link href='/events' style={{fontSize:'20px',padding:'10px 16px'}}>Events</Nav.Link>
                                        <Nav.Link href='/sponsors' style={{fontSize:'20px',padding:'10px 16px'}}>Sponsors</Nav.Link>
                                        <Nav.Link href='/contact' style={{fontSize:'20px',padding:'10px 16px'}}>Contact</Nav.Link>
                                        <Nav.Link style={{fontSize:'20px',padding:'10px 16px'}}>Blog</Nav.Link>
                                   </Nav> 
                              </Navbar.Collapse>
                              
                         </Navbar>
                    </Wrapper>
               </Container>
          </div>
     );
}

export default index;