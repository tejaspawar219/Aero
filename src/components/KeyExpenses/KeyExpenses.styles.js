import styled from "styled-components";

export const Expenses=styled.div`
     display:flex;
     justify-content:space-between;
     margin:60px 0;
     margin-left:20px;
     flex-direction:row;
     @media(max-width:750px){
          flex-direction: column;
     }
`
export const Cards=styled.div`
     display: flex;
     @media only screen and (max-width:750px)
     {
          flex-direction:column
     }
`
export const Card=styled.div`
width: 50%;
@media only screen and (max-width:750px)
{
     width: 100%;
}

`
export const CardHeading=styled.div`
font-size:40px;

`
export const CardImg=styled.img`
     width:95%;
     height: auto;
     margin: 30px 0px;
`
export const CardList=styled.ul`
     margin-left:20px;
     margin-bottom:70px;
`