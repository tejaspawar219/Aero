import React from 'react'
import NavBar from '../components/NavBar'
import SponsorsLogos from '../components/SponsorsLogos'
import WhySponsorUs from '../components/WhySponsorUs'
import Footer from '../components/Footer'
import { PageStyle,Page } from './styles'
import SponsorshipDeliverables from '../components/SponsorshipDeliverables'
import KeyExpenses from '../components/KeyExpenses'
function Sponsors() {
     return (
          <>
          <PageStyle>
               <NavBar/>
               <Page>
                    <SponsorsLogos/>
                    <WhySponsorUs/>
                    <SponsorshipDeliverables/>
                    <KeyExpenses/>
                    <Footer/>
               </Page>
          </PageStyle>
          </>
     )
}

export default Sponsors
