import styled from 'styled-components';
// import LogoImage from '../../assets/logo.png'

export const Container=styled.div`
    background-color: rgb(10,8,47,1);
    padding: 20px 0;
     width: 100%;
     display: flex;
     justify-content: center;
     position: fixed;
     z-index: 1;
     @media only screen and (max-width:750px)
     {
         padding:10px 0;
     }
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
@media only screen and (max-width:500px){
    height:45px;
}
`
  
export const NavLinks=styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    font-size: 24px;
`
export const Nav=styled.a`
    text-decoration:none;
    color:white;
    :hover{
        color:lightgrey;
        cursor:pointer;
    }
`