import styled from "styled-components";

export const Container=styled.div`
     height: auto;
     padding: 50px 0;
     margin: 50px 0;
`

export const Wrapper=styled.div`
     width: 85%;
     height: auto;
     margin: auto;
     max-width: 1200px;
     display: flex;
     justify-content:center;
     color:white;
     @media only screen and (max-width:750px)
     {
          flex-direction: column;
          align-items: center;
     }
`

export const Title=styled.div`
     font-size:50px ;
     font-weight: 700;
`
export const Section=styled.div`
     width: 25%;
     display: flex;
     flex-direction: column;
     padding:70px 0;
     align-items: center;
     i{
          font-size: 50px;
          color: white;
     }
`

export const Text=styled.div`
     margin-top: 25px;
     text-align: center;
     font-size: 20px;
     color: white;
     line-height: 25px;
     width: 250px;
`