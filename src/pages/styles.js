import styled from "styled-components";

export const PageStyle=styled.div`
background: linear-gradient(180deg, #0A082F 0%, rgba(36, 11, 83, 0.97) 48.17%, #0A082F 100%);
font-family: 'Lexend Deca', sans-serif;
`

export const Container=styled.div`
     padding-top:120px ;
`

export const Wrapper = styled.div`
     display:flex;
     flex-direction:column;
     align-items:center;
     width: 90%;
     height:auto;
     max-width: 1200px;
     margin: 60px auto;
`

export const Heading =styled.h1`
     padding:10px 0;
     font-size:50px;
     font-weight:300;
     color:white;
     height:auto;
     @media only screen and (max-width:750px)
     {
          font-size:30px;
          padding: 0;
     }
`

export const Line=styled.div`
     height:1px;
     background:white;
     width:100%;
     margin:20px 0;
     @media only screen and (max-width:700px)
     {
          margin:15px 0;
     }
`


export const Content=styled.div`
     font-size:24px;
     color:white;
     text-align:justify;
     width: 100%;
     padding-left:10px;
     @media only screen and (max-width:750px)
     {
          font-size:16px;
          li{
               font-size:16px;
          }
     }
`