import styled from "styled-components";
import Image from '../../assets/aircraft.svg'

export const Container=styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     padding-top:7.5rem;
     background:rgba(0,0,0,0.2);
`  
export const Wrapper = styled.div`
     display:flex;
     align-items:center;
 npm    justify-content: space-between;
     width: 85%;
     height: 29.375rem;
     max-width: 1200px;
     margin: auto;
     transition: .3s;
`
// export const Img=styled.div`
//      width:40%;
//      height:21.25rem;
//      background-image: url(${Image});
//      background-size: contain;
//      background-repeat: no-repeat;
// `

export const Img=styled.img`
     width:45% ;
`

export const Summary=styled.div`
width:55%;
padding-left: 74px;
color: white;
font-size:22px ;
`

export const Text=styled.div`
margin-bottom: 50px;
`

export const Button=styled.div`
     color: white;
     border-radius: 10px;
     background-color: #8800FF;
     height: 63px;
     width: 140px;
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 23px;
`