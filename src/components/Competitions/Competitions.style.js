import styled from "styled-components";

export const Competition=styled.div`
    display: flex;
    position: relative;
    p{
        margin-top:17px ;
        display: none;
        color:#8800ff;
        font-size: 24px;
        font-weight: 700;
    }
    @media only screen and (min-width: 700px){
        :hover{
            p{
                display: block;
            }
            .inner{
                display: none;
            }
            .outer{
                width:100px;
                animation: timeline 0.5s ease;
            }
            @keyframes timeline {
                from{width:50px}
                to{width:100px}
            }
        }
    }
`
export const LeftSpace=styled.div`
    width:0px;
    
    @media only screen and (max-width: 700px)
    {
        width:20%;
    }
`
export const TimeLine=styled.div`
    width: 15%;
    height: 100%;
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 700px){
        left: 0;
        transform: translate(0%,-50%);
    }
`
export const TimeLineContent=styled.div`
    width:100%;
    height: 100%;
    display: flex;
    align-items: ${props=>props.start?"end":"start"};
    justify-content: center;
    position: relative;
    @media only screen and (max-width: 700px){
        p{
            display: block;
            font-size: 18px;
        }
        .outer{
            width:80px;
            height:40px;
        }
        .inner{
            display: none;
        }
        margin-left: 20px;
    }
`
export const Title=styled.div`
    font-size: 31px;
    font-weight: 700;
    @media only screen and (max-width:1150px){
        font-size: 28px;
    }
    @media only screen and (max-width:950px){
        font-size: 25px;
    }
    @media only screen and (max-width:480px){
        font-size: 20px;
    }
`
export const Text=styled.div`
    margin-top: 20px;
    font-size: 20px;
    @media only screen and (max-width:1150px)
    {
        font-size: 18px;
    }
`
export const Circle=styled.div`
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    height:50px;
    width:50px;
    background: white;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InnerCircle=styled.div`
    height:25px;
    width:25px;
    background: #8800ff;
    border-radius: 50%;
`
export const Line=styled.div`
    width:2px;
    background: white;
    height: ${props=>props.ends?"50%":"100%"};
`
export const Content=styled.div`
    width:100%;
    display: flex;
    margin:50px 0;
    flex-direction: ${props=>props.rev?"row-reverse":"row"};
    @media only screen and (max-width: 700px)
    {
        flex-direction: column-reverse;
        align-items: center;
        width:80%;
    }
`
export const CenterSpace=styled.div`
    width:20%;
    height:100%;
    @media only screen and (max-width: 700px)
    {
        width:0;
    }
`
export const Summary=styled.div`
    width:45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    
    @media only screen and (max-width: 700px)
    {
        margin-top: 25px;
        width:80%;
    }
`
export const CompetitionImg=styled.img`
    width: 45%;
    aspect-ratio:3/2;
    cursor: pointer;
    @media only screen and (max-width: 700px)
    {
        width:80%;
    }
`