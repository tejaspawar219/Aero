import styled from "styled-components";

export const Card=styled.div`
    display:flex;
    align-items:center;
    font-size:24px;
    color:white;
    padding:60px 0;
    flex-direction: ${props => props.reverse?"row-reverse":"row"};
`

export const Summary=styled.div`
    width:50%;
`

export const Img=styled.img`
    width:50%;
`