import React from 'react';
import {Wrapper} from '../../pages/styles'
import ImgUrl from '../../assets/TechKriti.jpg'
import ImgUrl2 from '../../assets/Competition.jpg'
import {Title,Text,Circle,InnerCircle,Line,TimeLineContent, TimeLine,Competition,LeftSpace,Content,Summary,CenterSpace,CompetitionImg } from './Competitions.style';

function Competitions() {
  return <Wrapper>
  <Competition>
      <TimeLine>
          <TimeLineContent start>
              <Line ends/>
              <Circle className='outer'>
                  <p>2022</p>
                  <InnerCircle className='inner'/>
              </Circle>
          </TimeLineContent>
      </TimeLine>
      <LeftSpace/>
      <Content>
      <Summary>
            <Title>SAE Aero Design Challenge East 2020 - March 2020</Title>
            <Text>
            SAE International Competition
Location: Lakeland, Florida, USA
Team AeroX participated in SAE International Regular class where the aim was to carry size 5 football as a cargo within the plane. 
                <br/>
                <b>》Overall Rank (Worldwide): 22nd </b>
                <br/>
                <b>》Asia Rank: 5th</b> 
            </Text>
        </Summary>
          <CenterSpace/>
          <CompetitionImg src={ImgUrl}/>
      </Content>
  </Competition>
  <Competition>
      <TimeLine>
          <TimeLineContent>
              <Line/>
              <Circle className='outer'>
                  <p>2022</p>
                  <InnerCircle className='inner'/>
              </Circle>
          </TimeLineContent>
      </TimeLine>
      <LeftSpace/>
      <Content rev>
      <Summary>
            <Title>International Planetary Aerial Systems Challenge (IPASC) 2021 - April 2021</Title>
            <Text>
                Location: Lakeland, Florida, USA
                Team AeroX participated in SAE International Regular class where the aim was to carry size 5 football as a cargo within the plane. 
                <br/>
                <b>》Overall Rank (Worldwide): 5th </b>
            </Text>
        </Summary>
          <CenterSpace/>
          <CompetitionImg src={ImgUrl2}/>
      </Content>
  </Competition>
  <Competition>
      <TimeLine>
          <TimeLineContent>
              <Line/>
              <Circle className='outer'>
                  <p>2022</p>
                  <InnerCircle className='inner'/>
              </Circle>
          </TimeLineContent>
      </TimeLine>
      <LeftSpace/>
      <Content>
      <Summary>
            <Title>SAE Aero Design Challenge East 2020 - March 2020</Title>
            <Text>
            SAE International Competition
Location: Lakeland, Florida, USA
Team AeroX participated in SAE International Regular class where the aim was to carry size 5 football as a cargo within the plane. 
                <br/>
                <b>》Overall Rank (Worldwide): 22nd </b>
                <br/>
                <b>》Asia Rank: 5th</b> 
            </Text>
        </Summary>
          <CenterSpace/>
          <CompetitionImg src={ImgUrl}/>
      </Content>
  </Competition>
  <Competition>
      <TimeLine>
          <TimeLineContent>
              <Line ends/>
              <Circle className='outer'>
                  <p>2022</p>
                  <InnerCircle className='inner'/>
              </Circle>
          </TimeLineContent>
      </TimeLine>
      <LeftSpace/>
      <Content rev>
      <Summary>
            <Title>International Planetary Aerial Systems Challenge (IPASC) 2021 - April 2021</Title>
            <Text>
                Location: Lakeland, Florida, USA
                Team AeroX participated in SAE International Regular class where the aim was to carry size 5 football as a cargo within the plane. 
                <br/>
                <b>》Overall Rank (Worldwide): 5th </b>
            </Text>
        </Summary>
          <CenterSpace/>
          <CompetitionImg src={ImgUrl2}/>
      </Content>
  </Competition>
  </Wrapper>;
}

export default Competitions;
