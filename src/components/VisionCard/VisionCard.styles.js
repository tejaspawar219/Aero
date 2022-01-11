import styled from "styled-components";

export const Card=styled.div`
    display:flex;
    align-items:center;
    font-size:24px;
    color:white;
    padding:60px 0;
    flex-direction: ${props => props.reverse?"row-reverse":"row"};
    @media(max-width: 1040px){
        flex-direction: column;
    }
`

export const Summary=styled.div`
    width:50%;
    @media(max-width: 1040px){
        width:100%;
        padding-bottom: 30px;
    }
`

export const Img=styled.img`
    width:50%;
    @media(max-width: 1040px){
        width:100%;
    }
`