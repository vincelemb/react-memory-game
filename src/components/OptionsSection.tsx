import React from 'react';
import '../styles/components/OptionsSection.scss';

interface OptionsSectionProps {
    title: string;
    desc?: string;
    theme: 'dark' | 'light';
    onClick?: (event) => void;
}

const OptionsSection: React.FC<OptionsSectionProps> = ({
    title,
    desc,
    theme,
    children,
}) => {
    const themeConfig = {
        text: theme === 'light' ? 'primary' : 'white',
        bg: theme === 'light' ? 'white' : 'darkenprimary',
    };

    return (
        <article
            className={`OptionSection _bg-${themeConfig.bg} _text-${themeConfig.text}`}>
            <h2>{title}</h2>
            {desc && <div className="_mt-xxs">{desc}</div>}
            <div className="_flex _justify-center _px-md _py-sm _rounded-small _flex-wrap">
                {children}
            </div>
        </article>
    );
};

export default OptionsSection;
