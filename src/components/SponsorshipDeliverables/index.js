import React from 'react'
import {Img} from './SponsorshipDeliverables.styles'
import { Content ,Wrapper,Heading,Line} from '../../pages/styles'
import ImgUrl from '../../assets/sponsor_2.png'

function SponsorshipDeliverables() {
     return (
               <Wrapper>
                    <Heading>Sponsorship Delivers</Heading>
                    <Line/>
                    <Img src={ImgUrl} />
                    <Content>
                         <li>Placement of company logo on the Plane and Team Apparel.</li>
                         <li>Feature on Team’s Social Media platforms.</li>
                         <li>A redirecting link on our official website, leading to the info section of your company/brand.</li>
                         <li>Permission for on-campus brand promotion with live stalls.</li>
                         <li>Database of all students of the institute.</li>
                         <li>Promotional team visit with the plane.</li>
                         <li>Company feature in all event PR announcements.</li>
                         <li>Other custom benefits upon request.</li>
                    </Content>
               </Wrapper>
     )
}

export default SponsorshipDeliverables
