import React from 'react'
import {Card,Img,Summary} from './VisionCard.styles'
import Img1 from '../../assets/Undraw2.svg'
import { Content } from '../../pages/styles'
function VisionCard(props) {
    return (
        <>
        <Card reverse={props.reverse}>
            <Summary>{props.text}</Summary>
            <Img src={props.ImgPath} alt="hey"/>
        </Card>
        </>

    )
}

export default VisionCard
