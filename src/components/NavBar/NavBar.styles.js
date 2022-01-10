import styled from 'styled-components';
// import LogoImage from '../../assets/logo.png'

export const Container=styled.div`
    background-color: rgb(10,8,47,1);
     width: 100%;
     height: 7.5rem;
     display: flex;
     justify-content: center;
     position: fixed;
     z-index: 1;
`

export const Wrapper = styled.div`  
     width: 85%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    max-width: 1200px;
`

export const Logo=styled.img`
height: 70px;
cursor:pointer;
`

  
export const NavLinks=styled.div`
    color:#fff;
    opacity: 1;
    display: flex;
    width: 70%;
    justify-content: space-between;
    font-size: 20px;
`
export const Nav=styled.a`
    text-decoration:none;
    color:white;
    :hover{
        color:lightgrey;
        cursor:pointer;
    }
`