import React from 'react'
import svgType from '../../type/svgType';

const TimeSvg:React.FC<svgType> = (props: React.PropsWithChildren<svgType>) =>{

    return(

        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.svgWidth}
        height={props.svgHeight && props.svgHeight}
        fill={props.bgFillColor ? props.bgFillColor : '#007d8f'}
        viewBox="0 0 25 25"
        >
        <path d="M12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25z"></path>
        <path
            fill={props.fillColor ? props.fillColor : '#fff'}
            d="M20.506 11.483a.298.298 0 00-.27-.171h-.88c-.56-3.04-3.23-5.35-6.429-5.35A6.546 6.546 0 006.39 12.5a6.546 6.546 0 006.538 6.538 6.563 6.563 0 005.663-3.268.594.594 0 00-1.029-.595 5.37 5.37 0 01-4.634 2.674c-2.95 0-5.35-2.4-5.35-5.349 0-2.95 2.4-5.35 5.35-5.35 2.541 0 4.67 1.782 5.212 4.161h-.874a.298.298 0 00-.229.488l1.486 1.783a.297.297 0 00.457 0l1.486-1.783a.297.297 0 00.04-.317z"
        ></path>
        <path
            fill={props.fillColor ? props.fillColor : '#fff'}
            d="M12.927 7.447a.594.594 0 00-.595.595v3.606a1.039 1.039 0 001.034 1.792l2.068 1.193a.594.594 0 00.594-1.029l-2.07-1.195a1.035 1.035 0 00-.436-.76V8.042a.596.596 0 00-.595-.595zm0 5.498a.446.446 0 110-.892.446.446 0 010 .892z"
        ></path>
        </svg>
    )

}

export default TimeSvg;