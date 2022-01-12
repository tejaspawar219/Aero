import React from 'react'
import { Content, Wrapper,Heading,Line } from '../../pages/styles'
import { Img } from './AboutAero.styles'
import ImgUrl from '../../assets/Aero_team.jpeg'
function AboutAero() {
     return (
          <Wrapper>
               <Heading>Aero-RGIT</Heading>
               <Line/>
               <Img src={ImgUrl}/>
               <Content>
                    <li> Brilliant minds have come together and led to the formation of AERO-RGIT, the official Aero-modelling club of RGIT. It aims at providing suitable platform for students interested in avionics and related activites by participating in various National and International level competitions.</li>
                    <li> Aero-RGIT is one of the most versatile, passionate and hard-working team at RGIT striving for excellence.</li>
                    <li> Our club promotes innovative ideas and skills by bringing together the brightest minds of the institute. We also train students by conducting various workshops and seminars, providing students in-depth knowledge about Aero-modelling.</li>
               </Content>
          </Wrapper>
     )
}

export default AboutAero
