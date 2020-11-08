import React from 'react'
import svgType from '../../type/svgType';

const CloseSvg:React.FC<svgType> = (props: React.PropsWithChildren<svgType>) =>{

    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.svgWidth}
            height={props.svgHeight && props.svgHeight}
            viewBox="0 0 25 25">
            <path fill={props.fillColor ? props.fillColor : '#fff'} d="M24.7.3c-.4-.4-1-.4-1.4 0l-23 23c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l23-23c.4-.4.4-1 0-1.4z"></path>
            <path fill={props.fillColor ? props.fillColor : '#fff'} d="M24.7 23.3L1.7.3C1.3-.1.7-.1.3.3s-.4 1 0 1.4l23 23c.2.2.5.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4z"></path>
        </svg>
    )

}

export default CloseSvg;