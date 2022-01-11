import styled from "styled-components";

export const Container=styled.div`
    background-color: rgba(17, 14, 83, 0.85);
`

export const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 100px 0;
    width: 85%;
    margin: auto;
    max-width: 1200px;
    color: white;
    flex-direction: row;
    @media (max-width: 980px){
        flex-direction: column;
   }
`

export const Contact=styled.div`
`

export const SocialMedia=styled.div`
    width: 450px;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    i{
        margin-left: 20px;
        font-size: 30px;
        color: white;
    }
`
export const Address=styled.div`
    text-align: center;
    margin: 50px 0;
    width:10%0%;
`
export const FootLogo=styled.img`
    height: 100px;
    margin-bottom: 20px;
`
export const Text=styled.div`
    width: 450px;
    font-size:20px ;
    @media (max-width: 980px){
        text-align: center;
        padding-bottom: 30px;
        width:95%;
   }

`