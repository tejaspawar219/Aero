import React from 'react'
import { Page, PageStyle } from './styles'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Feedback from '../components/Feedback'

function Contact() {
    return (
        <PageStyle>
            <NavBar/>
            <Page>
                <Feedback/>
                {/* <Map/> */}
                <Footer/>
            </Page>
        </PageStyle>
    )
}

export default Contact
