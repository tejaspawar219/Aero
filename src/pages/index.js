import React from 'react';
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { PageStyle,Page } from './styles';
import WhyJoinUs from '../components/WhyJoinUs';
import FlyWithUs from '../components/FlyWithUs';
import Slider from '../components/Slider';
function LandingPage(props) {
     return (
          <PageStyle>
               <NavBar />
               <Page>
                    <HeroSection />
                    <Slider/>
                    <WhyJoinUs/>
                    <FlyWithUs/>
                    <Footer/>
               </Page>
          </PageStyle>
     );
}

export default LandingPage;