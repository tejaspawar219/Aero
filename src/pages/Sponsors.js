import React from 'react'
import NavBar from '../components/NavBar'
import SponsorsLogos from '../components/SponsorsLogos'
import WhySponsorUs from '../components/WhySponsorUs'
import Footer from '../components/Footer'
import { PageStyle } from './styles'
import SponsorshipDeliverables from '../components/SponsorshipDeliverables'
import KeyExpenses from '../components/KeyExpenses'
function Sponsors() {
     return (
          <>
          <PageStyle>
               <NavBar/>
               <SponsorsLogos/>
               <WhySponsorUs/>
               <SponsorshipDeliverables/>
               <KeyExpenses/>
               <Footer/>
          </PageStyle>
          </>
     )
}

export default Sponsors
