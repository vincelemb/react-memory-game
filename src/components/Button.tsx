import React from 'react';

type ButtonProps = {
    isActive?: boolean;
    theme: 'dark' | 'light';
    onClick: () => void;
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
