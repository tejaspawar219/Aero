import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Page, PageStyle } from './styles'
import Team from '../components/Team'
function OurTeam() {
     return (
          <PageStyle>
               <NavBar/>
               <Page>
                    <Team />
                    <Footer />
               </Page>
               
          </PageStyle>
     )
}

export default OurTeam
