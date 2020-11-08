import React, { useState } from 'react';

import { StarSvg } from './svg';

type ScoreClickProps = {
    onClick?: (event: any) => void;
    count: number | string;
    isIcon?: boolean;
    iconPosition?: string;
};


const ScoreClick: React.FC<ScoreClickProps> = (props: React.PropsWithChildren<ScoreClickProps>) => {
    
    const [positionIcon, setPositionIcon] = useState<string>()

    switch (props.iconPosition && props.iconPosition) {
        case "right":
            setPositionIcon('_flex-row-reverse')
            break;
        default:
            break;
    }

    
    return (
        <div className={`${positionIcon} _flex _px-xs _py-xxs _bg-golden _rounded-rounded`} onClick={props.onClick && props.onClick}>
            {props.isIcon && (
            <div className="_items-center _flex _mr-xs">
                <StarSvg svgWidth="15px"></StarSvg>
            </div>
            )}
            <div className="_text-center _text-darkengolden">
                {props.count}
            </div>
        </div>
    );
};

export default ScoreClick;
