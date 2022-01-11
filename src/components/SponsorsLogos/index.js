import React from 'react'
import { Sponsor,Sponsors} from './SponsorLogos.styles'
import { Wrapper ,Heading,Line} from '../../pages/styles'
import ImgSrc1 from '../../assets/apc.jpg'
import ImgSrc2 from '../../assets/aara.png'
import ImgSrc3 from '../../assets/solidworks.png'

function SponsorsLogos() {
     return (
          <Wrapper>
               <Heading>Our Sponsors</Heading>
               <Line/>
               <Sponsors>
                    <Sponsor src={ImgSrc1}/>
                    <Sponsor src={ImgSrc2}/>
                    <Sponsor src={ImgSrc3}/>
               </Sponsors>
          </Wrapper>
     )
}

export default SponsorsLogos
