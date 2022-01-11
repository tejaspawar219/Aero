import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Page, PageStyle } from './styles'
import AboutAero from '../components/AboutAero'
import Vision from '../components/Vision'
function AboutUS() {
     return (
          <PageStyle>
               <NavBar/>
               <Page>
                    <AboutAero/>
                    <Vision/>
               </Page>
               <Footer/>
          </PageStyle>
     )
}

export default AboutUS
