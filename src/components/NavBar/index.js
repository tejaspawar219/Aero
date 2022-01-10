import React from 'react';
import { Container, Wrapper, Logo, NavLinks } from './NavBar.styles';
import LogoImg from '../../assets/Logo.png'
import {Navbar,Nav} from 'react-bootstrap'

function index(props) {
     return (
          <div>
             {/* <Container>
                 <Wrapper>
                      <a href="/"><Logo src={LogoImg}/></a>
                      <NavLinks>
                         <Nav>Our Team</Nav>
                         <Nav href='/aboutus'>About Us</Nav>
                         <Nav>Events</Nav>
                         <Nav href='/sponsors'>Sponsors</Nav>
                         <Nav>Contact</Nav>
                         <Nav>Blog</Nav>
                     </NavLinks>
                 </Wrapper>
               </Container> */}
               <Container>
                    <Wrapper>
                         <Navbar variant='dark' expand='lg' sticky='top'>
                              <Navbar.Brand>
                                   <a href='/'><Logo src={LogoImg}/></a>
                              </Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse>
                                   <Nav style={{alignSelf:'right'}}>
                                        <Nav.Link>Our Team</Nav.Link>
                                        <Nav.Link href='/aboutus'>About Us</Nav.Link>
                                        <Nav.Link>Events</Nav.Link>
                                        <Nav.Link href='/sponsors'>Sponsors</Nav.Link>
                                        <Nav.Link>Contact</Nav.Link>
                                        <Nav.Link>Blog</Nav.Link>
                                   </Nav> 
                              </Navbar.Collapse>
                              
                         </Navbar>
                    </Wrapper>
               </Container>
          </div>
     );
}

export default index;