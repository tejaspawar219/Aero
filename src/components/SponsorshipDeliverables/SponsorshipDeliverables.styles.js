import styled from "styled-components";

export const Img=styled.img`
     height:380px;
     width:600px;
     margin:70px;
     padding:0px 40px;
     background: white;
     border-radius:20px;
     @media only screen and (max-width:750px)
     {
          margin-bottom: 60px;
          width: 80%;
          height:45vw;
     }
`
export const Content=styled.ul`
     font-size: 24px;
     color:white;
     @media only screen and (max-width: 500px)
     {
          font-size: 15px;
     }
`