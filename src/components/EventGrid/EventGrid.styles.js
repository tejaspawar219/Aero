import styled from "styled-components";

export const Container=styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`
export const Event = styled.div `
    margin:0 20px;
    margin-bottom:50px;
    cursor:pointer;
    position:relative;
    max-width:300px;
    :hover{
        .more{
            display:block;
        }
    }
`
export const EventImg=styled.img`
    width:300px;
    aspect-ratio:3/2;
    object-fit:cover;
    :hover{
        opacity:0.5;
    }
`
export const EventName=styled.div`
    margin:10px 0;
    font-size:20px;
    color:white;

`
export const EventContent=styled.div`
    padding:40px;
    font-weight:400;
    @media only screen and (max-width:600px)
    {
        padding:25px;
    }
`
export const EventHeading=styled.div`
    font-size:25px;
    font-weight:700;
`
export const More=styled.div`
    position:absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    color:white;
    font-size:18px;
    display:none;
`