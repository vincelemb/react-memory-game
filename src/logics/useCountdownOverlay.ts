import { useEffect, useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';

export default function useCountdown(active: boolean) {
    const { countdownOverlaySeconds, setCountdownOverlaySeconds } = useContext(CountdownContext);
    
    useEffect(() => {
        let timerInterval: NodeJS.Timeout | undefined = undefined;
        
        if (setCountdownOverlaySeconds) {
            if (active) {
                timerInterval = setInterval(() => {
                    setCountdownOverlaySeconds(countdownOverlaySeconds - 1)
                }, 1000);
            }
            return () => {
                if (timerInterval) clearInterval(timerInterval);
            };
        }
        return;
    }, [active, countdownOverlaySeconds]);
    
    return { countdownOverlaySeconds };
}