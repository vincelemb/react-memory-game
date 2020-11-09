import React, { useContext } from 'react';
import { snakeCase } from 'lodash';
import { GameContext, THEMES, LEVELS } from '../context/GameContext';
import useGame from '../logics/useGame'
import TimeFormat from '../utils/TimeFormat';

import { Button } from '../components';
import { ClickSvg, TimeSvg } from '../components/svg';
import OptionsSection from '../components/OptionsSection';
import ScoreIndicator from '../components/ScoreIndicator';
import { ETheme } from './Button';

const Options: React.FC = () => {
    const { level, setLevel, theme, setTheme } = useContext(GameContext);
    const { records } = useGame();

    const renderButton = (
        buttons: string[],
        active: string,
        theme: ETheme,
        onClick: () => void
    ): JSX.Element[] => {
        return buttons.map((label) => {
            const isActive = label === active;

            return (
                <Button
                    key={label}
                    onClick={onClick.bind(null, label)}
                    isActive={isActive}
                    theme={theme}>
                    {label}
                </Button>
            );
        });
    };

    return (
        <aside className={`_mr-md lg:_mr-none _my-xl _w-full`}>
            <OptionsSection title="Thème" theme="dark">
                {renderButton(THEMES, theme, ETheme.LIGHT, setTheme())}
            </OptionsSection>

            <OptionsSection title="Niveau de difficulté" theme="light">
                {renderButton(
                    LEVELS.map((level) => level.toString()),
                    level.toString(),
                    ETheme.DARK,
                    setLevel()
                )}
            </OptionsSection>

            <OptionsSection
                title="Score"
                desc={`(${level} cartes)`}
                theme="dark">
                <ScoreIndicator
                    title="Temps"
                    icon={<TimeSvg svgWidth="25px" />}
                    record={
                        records[level] && records[level][snakeCase(theme)]
                            ? TimeFormat(records[level][snakeCase(theme)].time)
                            : '00:00'
                    }
                />

                <ScoreIndicator
                    title="Clics"
                    icon={<ClickSvg svgWidth="25px" />}
                    record={
                        records[level] && records[level][snakeCase(theme)]
                            ? records[level][snakeCase(theme)].clicks
                            : 0
                    }
                />
            </OptionsSection>
        </aside>
    );
};

export default Options;
