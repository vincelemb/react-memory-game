import React from 'react'
import svgType from '../../type/svgType';

const PauseSvg:React.FC<svgType> = (props: React.PropsWithChildren<svgType>) =>{

    return(

        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.svgWidth}
        height={props.svgHeight && props.svgHeight}
        enableBackground="new 0 0 298.667 298.667"
        version="1.1"
        viewBox="0 0 298.667 298.667"
        xmlSpace="preserve"
        >
        <path fill={props.bgFillColor ? props.bgFillColor : '#007d8f'} 
        d="M192 0H277.33299999999997V298.667H192z"></path>
        <path fill={props.bgFillColor ? props.bgFillColor : '#007d8f'} 
        d="M21.333 0H106.666V298.667H21.333z"></path>
        </svg>
    )

}

export default PauseSvg;