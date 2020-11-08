import React, { createContext, useState } from 'react';

export type TimeContextType = {
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>> | any;
    minutes: number;
    setMinutes: React.Dispatch<React.SetStateAction<number>> | any;
};

export const TimerContext = createContext<TimeContextType>({
    seconds: 0,
    setSeconds: undefined,
    minutes: 0,
    setMinutes: undefined,
});

export const TimerProvider = ({ children }) => {
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);

    return (
        <TimerContext.Provider value={{ seconds, setSeconds, minutes, setMinutes }}>{children}</TimerContext.Provider>
    );
};

export default TimerContext;
