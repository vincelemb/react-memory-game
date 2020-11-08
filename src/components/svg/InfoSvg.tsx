import React from 'react'
import svgType from '../../type/svgType';

const InfoSvg:React.FC<svgType> = (props: React.PropsWithChildren<svgType>) =>{

    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.svgWidth}
        height={props.svgHeight}
        x="0"
        y="0"
        enableBackground="new 0 0 25 25"
        viewBox="0 0 25 25"
        >
        <path
            fill={props.fillColor ? props.fillColor : "#846700"}
            d="M12.5 0C5.6 0 0 5.6 0 12.5S5.6 25 12.5 25 25 19.4 25 12.5 19.4 0 12.5 0zm-.4 6.7c0-1 .8-1.7 1.7-1.7.7 0 1.3.5 1.3 1.2v.2c0 1-.8 1.8-1.7 1.8-.7 0-1.3-.5-1.3-1.1v-.4zm-1 12.4c-.7 0-1.2-.5-.7-2.5l.8-3.6c.1-.6.2-.8 0-.8-.6.2-1.1.4-1.6.8l-.3-.6c1.2-1.2 2.8-2.1 4.4-2.4.7 0 .8.9.5 2.3l-.9 3.8c-.2.7-.1.9.1.9.6-.1 1.1-.4 1.6-.9l.4.6c-1.2 1.2-2.7 2-4.3 2.4z"
        ></path>
        </svg>
    )

}

export default InfoSvg;