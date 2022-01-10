import React from 'react'
import { Expenses,Cards,Card,CardHeading,CardImg,CardList} from './KeyExpenses.styles'
import { Content,Wrapper,Heading,Line} from '../../pages/styles'
import ImgSrc1 from '../../assets/sponsor_3.jpg'
import ImgSrc2 from '../../assets/sponsor_4.jpg'

function KeyExpenses() {
     return (
          <Wrapper>
               <Heading>Key Expenses</Heading>
               <Line/>
               <Content>
                    <p>Every penny of your contribution goes towards the research, development and manufacturing of our aircraft. Our journey towards building a state of the art aircraft will not complete without your valuable contributions and support. Here's a look at how vour resources are utlized in our proiect:</p>
                    <Expenses>
                         <ul>
                              <p>Materials & Components</p>
                              <li>Balsa Wood</li>
                              <li>Monocoat</li>
                              <li>Landing Gear</li>
                              <li>Propellors</li>
                         </ul>
                         <ul>
                              <p>Electronics</p>
                              <li>Motors</li>
                              <li>SAE Power Limiter</li>
                              <li>ESC</li>
                              <li>Control System</li>
                              <li>Battery</li>
                              <li>Servo</li>
                         </ul>
                         <ul>
                              <p>Manufacturing</p>
                              <li>Laser Cutting</li>
                              <li>Power Tools</li>
                              <li>Adhesives</li>
                              <li>Clamps</li>
                         </ul>
                         <ul>
                              <p>Registration & Other Fees</p>
                              <li>SAE Aero Design Entry Fee</li>
                              <li>SAE Membership Fee</li>
                         </ul>
                    </Expenses>
                    <Cards>
                         <Card>
                              <CardHeading>National</CardHeading>
                              <CardImg src={ImgSrc1}/>
                              <CardList>
                                   <p>Logistics</p>
                                   <li>Transportation of Raw Material</li>
                                   <li>Transportation of Plane.</li>
                                   <li>Travelling for Team Members</li>
                              </CardList>
                         </Card>
                         <Card>
                              <CardHeading>International</CardHeading>
                              <CardImg src={ImgSrc2}/>
                              <CardList>
                                   <p>Logistics</p>
                                   <li>Transportation of Raw Material</li>
                                   <li>Transportation of Plane to USA</li>
                                   <li>Accommodation & Travelling for Team Members</li>
                              </CardList>
                         </Card>
                    </Cards>
               </Content>
          </Wrapper>
     )
}

export default KeyExpenses
