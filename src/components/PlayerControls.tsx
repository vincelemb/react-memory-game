import React from 'react';
import { AudioButton } from '.';
import { PauseSvg, PlaySvg } from './svg';

type ClickPlayerControls = {
    reset: () => any;
    pause: () => any;
    audio: () => any;
};

interface PlayerControlsProps {
    play: boolean | undefined;
    onClick: ClickPlayerControls;
    isPlaying: boolean | undefined;
    audioFile: string;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ play, onClick, ...audioProps }) => (
    <div className="_mt-sm _mb-lg _w-full _flex _justify-center _items-center">
        <button
            className="_bg-white _rounded-rounded _w-xxl _h-xxl _border-none _p-xs _cursor-pointer _outline-none _flex _items-center _justify-center"
            onClick={onClick.reset}>
            <div className="_w-sm _h-sm _bg-warning"></div>
        </button>
        <button
            className="_bg-white _rounded-rounded _w-xxxl _h-xxxl _border-none _cursor-pointer _outline-none _mx-sm _p-none"
            onClick={onClick.pause}>
            <div className="_flex _items-center _justify-center ">
                {play ? (
                    <PauseSvg svgWidth="25px"></PauseSvg>
                ) : (
                    <div className="_ml-xxs _flex">
                        <PlaySvg svgWidth="25px"></PlaySvg>
                    </div>
                )}
            </div>
        </button>
        <AudioButton id={'music'} {...audioProps} toggleMusic={onClick.audio}></AudioButton>
    </div>
);

export default PlayerControls;
