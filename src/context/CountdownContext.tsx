import React, { createContext, useState } from 'react';
// @ts-ignore

export type CountdownContextType = {
    countdownSeconds: number;
    setCountdownSeconds: React.Dispatch<React.SetStateAction<number>> | any;
    countdownOverlaySeconds: number;
    setCountdownOverlaySeconds: React.Dispatch<React.SetStateAction<number>> | any;
    countdownMinutes: number;
    setCountdownMinutes: React.Dispatch<React.SetStateAction<number>> | any;
};

export const CountdownContext = createContext<CountdownContextType>({
    countdownSeconds: 0,
    setCountdownSeconds: undefined,
    countdownOverlaySeconds: 0,
    setCountdownOverlaySeconds: undefined,
    countdownMinutes: 0,
    setCountdownMinutes: undefined,
});

export const CountdownProvider = ({ children }) => {
    const [countdownSeconds, setCountdownSeconds] = useState<number>(0);
    const [countdownOverlaySeconds, setCountdownOverlaySeconds] = useState<number>(0);
    const [countdownMinutes, setCountdownMinutes] = useState<number>(0);

    return (
        <CountdownContext.Provider
            value={{
                countdownSeconds,
                setCountdownSeconds,
                countdownOverlaySeconds,
                setCountdownOverlaySeconds,
                countdownMinutes,
                setCountdownMinutes,
            }}>
            {children}
        </CountdownContext.Provider>
    );
};

export default CountdownContext;
