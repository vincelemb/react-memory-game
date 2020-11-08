import React from 'react'
import svgType from '../../type/svgType';

const PlaySvg:React.FC<svgType> = (props: React.PropsWithChildren<svgType>) =>{

    return(

        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.svgWidth}
        height={props.svgHeight && props.svgHeight}
        viewBox="0 0 494.942 494.942"
        >
        <path fill={props.bgFillColor ? props.bgFillColor : '#007d8f'} 
            d="M35.353 0l424.236 247.471L35.353 494.942z"></path>
        </svg>
    )

}

export default PlaySvg;