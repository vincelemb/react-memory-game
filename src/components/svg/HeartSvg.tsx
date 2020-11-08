import React from 'react';
import svgType from '../../type/svgType';

const HeartSvg: React.FC<svgType> = (props: React.PropsWithChildren<svgType>) => {
    return (
        <svg
            className={props.customSvgClass && props.customSvgClass}
            style={{ animationPlayState: `${props.svgAnimationState && props.svgAnimationState}` }}
            width={props.svgWidth}
            height={props.svgHeight && props.svgHeight}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin"
            viewBox="0 0 193.8 193.8">
            <defs>
                <clipPath id="a">
                    <path
                        fill="#fff"
                        stroke="#707070"
                        d="M0 0h193.8v193.8H0z"
                        data-name="Rectangle 983"
                        transform="translate(82 118)"></path>
                </clipPath>
            </defs>
            <g data-name="Groupe de masques 421" transform="translate(-82 -118)">
                <g data-name="002-heart">
                    <path
                        fill="#e24c4b"
                        d="M275.8 187.874c0 58.746-69.647 97.506-90.844 107.8a14.138 14.138 0 01-12.112 0C151.647 285.384 82 247.831 82 187.874c0-30.282 22.408-55.112 49.661-55.112 21.8 0 39.971 15.141 46.633 36.337 6.662-21.2 25.436-36.337 46.633-36.337 28.465 0 50.873 24.83 50.873 55.112z"
                        data-name="Tracé 2414"></path>
                    <path
                        fill="#d1403f"
                        d="M275.8 187.874c0 58.746-69.647 97.506-90.844 107.8a15.5 15.5 0 01-12.718 0c-9.69-4.24-27.859-14.535-46.028-29.07h.606a103.516 103.516 0 00103.562-103.561 102.165 102.165 0 00-4.845-30.281c28.465.605 50.267 24.83 50.267 55.112z"
                        data-name="Tracé 2415"></path>
                    <g data-name="Groupe 469">
                        <path
                            fill="#fff"
                            d="M128.633 178.79c-9.69 2.423-18.774-1.211-20.591-7.873-1.212-7.268 4.844-14.538 14.536-16.958s18.774 1.211 20.591 7.873c1.815 7.268-4.846 14.536-14.536 16.958z"
                            data-name="Tracé 2416"
                            opacity="0.2"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default HeartSvg;
