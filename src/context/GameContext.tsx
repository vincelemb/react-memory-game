import React, { createContext, useState } from 'react';
import { CardsFlipped } from '../type/cards';

export const LEVELS = [12, 16, 20, 24, 28];
export const THEMES = [
    'Fruits et Légumes',
    'Médical',
    'Météo',
    'Sommeil',
    'Sport',
];
export const FLIPPED_RESET: CardsFlipped = { ids: [], imgs: [] };

export type GameContext = {
    clicks: number;
    setClicks: React.Dispatch<React.SetStateAction<number>> | any;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>> | any;
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>> | any;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>> | any;
    flipped: CardsFlipped;
    setFlipped: React.Dispatch<React.SetStateAction<CardsFlipped>> | any;
    found: string[];
    setFound: React.Dispatch<React.SetStateAction<string[]>> | any;
    isDone: boolean;
    setIsDone: React.Dispatch<React.SetStateAction<boolean>> | any;
};

export const GameContext = createContext<GameContext>({
    clicks: 0,
    setClicks: undefined,
    level: LEVELS[0],
    setLevel: undefined,
    theme: THEMES[0],
    setTheme: undefined,
    isPlaying: false,
    setIsPlaying: undefined,
    flipped: FLIPPED_RESET,
    setFlipped: undefined,
    found: [],
    setFound: undefined,
    isDone: false,
    setIsDone: undefined,
});

export const GameProvider = ({ children }) => {
    const [clicks, setClicks] = useState<number>(0);
    const [level, setLevel] = useState<number>(LEVELS[0]);
    const [theme, setTheme] = useState<string>(THEMES[0]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [flipped, setFlipped] = useState<CardsFlipped>(FLIPPED_RESET);
    const [found, setFound] = useState<string[]>([]);
    const [isDone, setIsDone] = useState<boolean>(false);

    return (
        <GameContext.Provider
            value={{
                clicks,
                setClicks,
                isPlaying,
                setIsPlaying,
                level,
                setLevel: () => (level: number) => setLevel(level),
                theme,
                setTheme: () => (theme: string) => setTheme(theme),
                flipped,
                setFlipped,
                found,
                setFound,
                isDone,
                setIsDone,
            }}>
            {children}
        </GameContext.Provider>
    );
};
