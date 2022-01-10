import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Container, PageStyle } from './styles'
import AboutAero from '../components/AboutAero'
import Vision from '../components/Vision'
function AboutUS() {
     return (
          <PageStyle>
               <NavBar/>
               <Container>
                    <AboutAero/>
                    <Vision/>
               </Container>
               <Footer/>
          </PageStyle>
     )
}

export default AboutUS
