import React from 'react'
import { Img } from './WhySponsorUs.styles'
import { Content ,Wrapper,Heading,Line} from '../../pages/styles'
import ImgSrc from '../../assets/sponsor_1.png'

function WhySponsorUs() {
     return (
          <Wrapper>
               <Heading>Why Sponsor Us</Heading>
               <Line />
               <Img src={ImgSrc}/>
               <Content>
                    <p>Partnering with AeroRGIT team is a one-of-its kind opportunity for your company/brand.</p>
                    <ul>
                         <li>National and International Exposure for your brand at the SAE Aero Design Challenge in SAEISS (India) and SAE Aero design (USA). An opportunity to be featured alongside Fortune 500 companies at an event attended by over 7,000 people from different states and countries.</li>
                         <li>Brand exposure at RGIT Zodiac – A cultural college festival with a footfall of over 5,000 students - consisting of various interactive events and music performances by top artists and DJs.</li>
                         <li>On-campus brand exposure to over 2,000 students in the age group of 18-22, based in the Mumbai Metropolitan Region, hailing from a predominantly upper socio-economic background.</li>
                         <li>Tax-benefits for your organization - CSR donations provide income-tax benefits in addition to a positive brand reputation.</li>
                         <li>Recruitment opportunities - As a sponsor, you will get exclusive access to recruit some of the brightest minds. Our team members have varied skill-sets, ranging from Aircraft Design to Operations and Management.</li>
                    </ul>
               </Content>
          </Wrapper>
     )
}

export default WhySponsorUs
