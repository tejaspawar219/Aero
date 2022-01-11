import styled from "styled-components";

export const Container=styled.div`
     height: auto;
     margin: 50px 0;
     display:flex;
     width:100%;
     @media only screen and (max-width:1250px)
     {
          margin: 10px 0;
          flex-direction:column;
     }
`


export const Title=styled.div`
     font-size:50px ;
     font-weight: 700;
     @media only screen and (max-width:750px)
     {
          font-size:35px;
          
     }
     @media only screen and (max-width:500px)
     {
          font-size:25px;
          text-align: center;
     }
`

export const Group=styled.div`
     width:50%;
     display: flex;
     flex-direction:row;
     justify-content:space-around;
     @media only screen and (max-width:1250px){
          width:100%;
     }
     @media only screen and (max-width:650px){
          flex-direction:column;
     }
`
export const Section=styled.div`
     width: 25%;
     display: flex;
     flex-direction: column;
     align-items: center;
     i{
          font-size: 50px;
          color: white;
     }
     @media only screen and (max-width:1250px){
          padding:20px 0px;
     }
     @media only screen and (max-width:650px)
     {
          width:100%;
          i{     
          font-size: 40px;
          }
     }
`

export const Text=styled.div`
     margin-top: 25px;
     text-align: center;
     font-size: 20px;
     color: white;
     line-height: 25px;
     width: 250px;
     @media only screen and (max-width:500px)
     {
          font-size: 15px;
     }
`