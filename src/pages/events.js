import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import EventGrid from '../components/EventGrid'
import { PageStyle,Page } from './styles';

function Events() {
    return (
        <PageStyle>
             <NavBar />
             <Page>
                  <Slider />
                  <EventGrid/>
                  <Footer/>
             </Page>
        </PageStyle>
    )
}

export default Events
