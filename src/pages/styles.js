import styled from "styled-components";

export const PageStyle=styled.div`
background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.97) 48.17%, #000 100%);
font-family: 'Lexend Deca', sans-serif;
`

export const Page=styled.div`
     padding-top:120px ;
     @media only screen and (max-width:750px)
     {
          padding-top: 50px;
     }
`

export const Wrapper = styled.div`
     display:flex;
     flex-direction:column;
     align-items:center;
     width: 90%;
     height:auto;
     max-width: 1200px;
     margin: 100px auto;
`

export const Heading =styled.h1`
     font-size:50px;
     font-weight:300;
     width:100%;
     color:white;
     height:auto;
     @media only screen and (max-width:750px)
     {
          font-size:35px;
          
     }
     @media only screen and (max-width:500px)
     {
          font-size:28px;
          text-align: center;
     }
`

export const Line=styled.hr`
     background:white;
     opacity:1;
     width:100%;
     margin-bottom:50px;
     @media only screen and (max-width:700px)
     {
          margin-bottom:20px;
     }
`


export const Content=styled.div`
     font-size:24px;
     color:white;
     width: 100%;
     padding-left:10px;
     @media only screen and (max-width:1200px)
     {
          padding-left: 0px;
          font-size:20px;
          li{
               font-size:20px;
          }
     }
     @media only screen and (max-width:900px)
     {
          padding-left: 0px;
          font-size:17px;
          li{
               font-size:17px;
          }
     }
     @media only screen and (max-width:750px)
     {
          padding-left: 0px;
          font-size:22px;
          li{
               font-size:22px;
          }
     }
     @media only screen and (max-width:500px)
     {
          padding-left: 0px;
          font-size:17px;
          li{
               font-size:17px;
          }
     }
`