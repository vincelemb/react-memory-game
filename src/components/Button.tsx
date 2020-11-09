import React from 'react';

export enum ETheme{
    DARK = 'dark',
    LIGHT = 'light'
}

type ButtonProps = {
    isActive?: boolean;
    theme: ETheme;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, theme, isActive, onClick }: React.PropsWithChildren<ButtonProps>) => (
    <button
        className={`Button -${theme} ${isActive ? '-active' : ''}`
        }
        onClick={onClick}>
        {children}
    </button>
);

export default Button;
