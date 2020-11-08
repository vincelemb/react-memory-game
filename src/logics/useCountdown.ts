import { useEffect, useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';

export default function useCountdown(active: boolean) {
    const { countdownSeconds, setCountdownSeconds } = useContext(CountdownContext);

    useEffect(() => {
        let timerInterval: NodeJS.Timeout | undefined = undefined;

        if (setCountdownSeconds) {
            if (active) {
                timerInterval = setInterval(() => {
                    setCountdownSeconds(countdownSeconds - 1);
                }, 100);
            }
            return () => {
                if (timerInterval) clearInterval(timerInterval);
            };
        }
        return;
    }, [active, countdownSeconds]);

    return { countdownSeconds };
}
