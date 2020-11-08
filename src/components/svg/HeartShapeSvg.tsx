import React from 'react'
import svgType from '../../type/svgType';

const HeartSvg:React.FC<svgType> = (props: React.PropsWithChildren<svgType>) =>{

    return(

    <svg 
    className={props.customSvgClass && props.customSvgClass}
    width={props.svgWidth}
    height={props.svgHeight && props.svgHeight}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 193.8 193.8">
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            stroke="#707070"
            d="M0 0h193.8v193.8H0z"
            data-name="Rectangle 983"
            transform="translate(82 118)"
          ></path>
        </clipPath>
      </defs>
      <g transform="translate(-83.1 -117.6)">
        <g data-name="Coeur" transform="translate(-.5)">
          <g
            data-name="Groupe de masques 421"
            transform="translate(1.6 -.4)"
          >
            <g data-name="002-heart" transform="translate(82 132.762)">
              <path
                d="M193.8 68.29c0 58.746-69.647 97.506-90.844 107.8a14.138 14.138 0 01-12.112 0C69.647 165.8 0 128.247 0 68.29c0-30.282 22.408-55.112 49.661-55.112 21.8 0 39.971 15.141 46.633 36.337 6.662-21.2 25.436-36.337 46.633-36.337 28.465 0 50.873 24.83 50.873 55.112z"
                className="_fill-white"
                data-name="Tracé 2414"
                transform="translate(0 -13.178)"
              ></path>
              <path
                d="M189.055 68.29c0 58.746-69.647 97.506-90.844 107.8a15.5 15.5 0 01-12.718 0c-9.69-4.24-27.859-14.535-46.028-29.07h.606A103.516 103.516 0 00143.633 43.459a102.165 102.165 0 00-4.845-30.281c28.465.605 50.267 24.83 50.267 55.112z"
                className="_fill-white"
                data-name="Tracé 2415"
                transform="translate(4.745 -13.178)"
              ></path>
              <g
                data-name="Groupe 469"
                opacity="0.2"
                transform="translate(25.888 20.444)"
              >
                <path
                  d="M43.855 57.011c-9.69 2.423-18.774-1.211-20.591-7.873C22.052 41.87 28.108 34.6 37.8 32.18s18.774 1.211 20.591 7.873c1.815 7.268-4.846 14.536-14.536 16.958z"
                  className="_fill-white"
                  data-name="Tracé 2416"
                  transform="translate(-23.11 -31.427)"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>

        // <svg
        // xmlns="http://www.w3.org/2000/svg"
        // width={props.svgWidth}
        // height={props.svgHeight && props.svgHeight}
        // enableBackground="new 0 0 298.667 298.667"
        // version="1.1"
        // viewBox="0 0 298.667 298.667"
        // xmlSpace="preserve"
        // >
        // <path fill={props.bgFillColor ? props.bgFillColor : '#007d8f'} 
        // d="M192 0H277.33299999999997V298.667H192z"></path>
        // <path fill={props.bgFillColor ? props.bgFillColor : '#007d8f'} 
        // d="M21.333 0H106.666V298.667H21.333z"></path>
        // </svg>
    )

}

export default HeartSvg;