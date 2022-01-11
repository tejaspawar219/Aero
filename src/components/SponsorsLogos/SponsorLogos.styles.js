import styled from "styled-components";


export const Sponsors=styled.div`
     display: flex;
     width:100%;
     justify-content:space-between;
     height: auto;
     @media only screen and (max-width:700px)
     {
          flex-direction:column;
          align-items:center;
     }
`

export const Sponsor=styled.img`
     height:230px;
     width:350px;
     background:white;
     border-radius:15px;
     @media only screen and (max-width:1300px)
     {
          height:200px;
          width: 300px;
     }
     @media only screen and (max-width:1100px)
     {
          height:150px;
          width: 230px;
     }
     @media only screen and (max-width:950px)
     {
          height:130px;
          width: 200px;
     }
     @media only screen and (max-width:700px)
     {
          width: 75%;
          height:40vw;
          margin: 20px;
     }
`