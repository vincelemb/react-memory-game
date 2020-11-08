import React from 'react';

type CircleGrowProps = {
    isPlaying?: boolean;
    playingStep?: number;
    borderColor?: string;
    activeClass?: string;
    playingState?: string;
};

const CircleGrow: React.FC<CircleGrowProps> = (props: React.PropsWithChildren<CircleGrowProps>) => {
    const animatedClass = props.isPlaying === true || props.isPlaying === false ? 'is-animated' : '';
    const animatedStep =
        props.playingStep && props.playingStep === 2 ? props.playingStep + ' is-played' : props.playingStep;

    return (
        <React.Fragment>
            <div
                className={`box-circle _absolute _bg-white _rounded-circle _flex _items-center _justify-center ${animatedClass}${animatedStep}`}
                style={{ animationPlayState: `${props.playingState}` }}></div>
            <div
                className={`circle-overlay _absolute _rounded-circle _border-${props.borderColor &&
                    props.borderColor} _border-3 _border-solid`}></div>
        </React.Fragment>
    );
};

export default CircleGrow;
