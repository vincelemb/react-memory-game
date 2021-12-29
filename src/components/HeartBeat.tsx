import React from 'react';

import { HeartSvg, HeartShapeSvg } from './svg';

type HeartBeatProps = {
    isPlaying?: boolean;
    playingStep?: number;
    borderColor?: string;
    activeClass?: string;
    playingState?: string;
};

const HeartBeat: React.FC<HeartBeatProps> = (props: React.PropsWithChildren<HeartBeatProps>) => {
    const animatedClass = props.isPlaying === true || props.isPlaying === false ? 'is-animated' : '';

    return (
        <React.Fragment>
            <HeartShapeSvg customSvgClass="_absolute" svgHeight="100%" svgWidth="100%"></HeartShapeSvg>
            <HeartSvg
                svgAnimationState={props.playingState && props.playingState}
                customSvgClass={`_absolute ${animatedClass}-${props.playingStep && props.playingStep}`}
                svgHeight="100%"
                svgWidth="100%"></HeartSvg>
        </React.Fragment>
    );
};

export default HeartBeat;
