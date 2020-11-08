import React from 'react';
import useGame from '../logics/useGame';
import { useScoreTimer } from '../logics';
import { Layout } from '../components';
import { ReloadSvg } from './svg';
import Modal from './Modal';

const Game: React.FC = () => {
    const { cards, clicks, reset, isPlaying, isDone } = useGame();
    const { secondsFormat } = useScoreTimer(isPlaying);

    return (
        <main className={`_flex-col _w-full _items-center _relative _my-xl`}>
            <div className="_mx-xxs _flex _justify-between _w-full _items-center _text-white _pb-xs">
                <div className="_flex _items-center ">
                    <span>Temps :</span>
                    <span className="_text-xl _ml-xxs"> {secondsFormat}</span>
                </div>
                <div className="_flex _items-center">
                    <span>Clics :</span>
                    <span className="_text-xl _ml-xxs">{clicks}</span>
                </div>
            </div>

            <div className="_flex _items-center _justify-center">
                <Modal onClick={reset} hidden={!isDone} />

                <Layout col={4} spacing="_p-xxs" desktopLayout>
                    {cards}
                </Layout>
            </div>

            <div className="_mt-sm _mb-lg _w-full _text-right">
                <button
                    className="_bg-white _rounded-rounded _w-xxl _h-xxl _border-none _p-xs _cursor-pointer _outline-none"
                    onClick={reset}>
                    <ReloadSvg></ReloadSvg>
                </button>
            </div>
        </main>
    );
};

export default Game;
