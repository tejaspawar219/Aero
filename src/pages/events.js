import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { PageStyle,Page } from './styles';

function Events() {
    return (
        <PageStyle>
             <NavBar />
             <Page>
                  <Footer/>
             </Page>
        </PageStyle>
    )
}

export default Events
