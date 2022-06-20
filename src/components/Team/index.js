import React,{useState,useEffect} from 'react'
import { Wrapper } from '../../pages/styles'
import { Container, Member, Avatar, Name } from './OurTeam.styles.js'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';


import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'


import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import "swiper/modules/scrollbar/scrollbar.min.css";

import './styles.css'
const Team = () => {
  const BaseUrl=process.env.BACKEND_BASE_URL;
  const [members, setMembers] = useState([]);
  const [advisor,setAdvisor]=useState([])
  const [captains,setCaptains]=useState([])
  const [heads,setHeads]=useState([])
 
  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get(BaseUrl+"team/");
      console.log("HEY")
      setAdvisor(res.data.filter(mem=>mem.role==="Faculty Advisor")[0])
      setMembers(res.data.filter(mem=>mem.role==="Team Member"))
      setCaptains(res.data.filter(mem=>mem.role==="Captain"||mem.role==="Vice Captain"))
      setHeads(res.data.filter(mem=>mem.role.split(" ")[mem.role.split(" ").length-1]==="Head"))
    }
    fetchMembers();
    
  }, [BaseUrl]);

  
  return (
    <Wrapper>
      {
        advisor?
        <Container>
        <Member>
            <Avatar src={BaseUrl+advisor.profileImg} />
              <Name>{advisor.membername}<br/><i>({advisor.role})</i></Name>
            </Member>
        </Container>
      :<></>
      }
      {
        captains?
        <Container style={{paddingTop:'20px'}}>
          {captains.map((member, i) => <>
            <Member key={i}>
            <Avatar src={BaseUrl+member.profileImg} />
              <Name>{member.membername}<br/><i>({member.role})</i></Name>
            </Member>
            <br />
          </>)}
        </Container>
        :<></>
      }
      {
        heads?
        <Container style={{paddingTop:'20px'}}>

          {heads.map((member, i) => <>
            <Member>
            <Avatar src={BaseUrl+member.profileImg} />
              <Name>{member.membername}<br/><i>({member.role})</i></Name>
            </Member>
            <br />
          </>)}
        </Container>
        :<></>
      }
      {
        members?
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {
            members.map((member,index)=>(
              <SwiperSlide className='slide' key={index}>
                  <img className='sliderimg' src={BaseUrl+member.profileImg} alt=""/>
                  <Name>{member.membername} <br/><b><i>{member.role}</i></b></Name>
              </SwiperSlide>
                  ))
          }
          </Swiper>
        :<></>
      }
      
    </Wrapper>
  )
}

export default Team