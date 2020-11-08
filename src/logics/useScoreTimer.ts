import { useEffect, useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
import TimeFormat from '../utils/TimeFormat';

export default function useScoreTimer(
    isPlaying: boolean,
    milliseconds: number = 1000
) {
    const { seconds, setSeconds } = useContext(TimerContext);

    useEffect(() => {
        let timerInterval: NodeJS.Timeout | undefined = undefined;

        if (setSeconds) {
            if (isPlaying) {
                timerInterval = setInterval(() => {
                    setSeconds((seconds) => seconds + 1);
                }, milliseconds);
            } else if (!isPlaying && seconds !== 0 && timerInterval) {
                clearInterval(timerInterval);
            }
            return () => {
                if (timerInterval) clearInterval(timerInterval);
            };
        }
        return;
    }, [isPlaying, seconds]);

    return { seconds: seconds, secondsFormat: TimeFormat(seconds) };
}
