import React from 'react';

type TabProps = {
    isActive?: boolean;
    toogleTab?: (event: any) => void;
    borderBottomStyle?: boolean;
};

const Tab: React.FC<TabProps> = (props: React.PropsWithChildren<TabProps>) => {
    const tabStyle = () => {
        if (props.borderBottomStyle) {
            return (
                <ul className="_w-full _justify-around _flex _cursor-pointer _m-none _px-sm _pt-sm">
                    <li
                        className={`${
                            props.isActive && props.isActive
                                ? '_border-0 _text-primary _border-b-2 _border-solid _border-primary'
                                : ''
                        } _text-primary _flex _justify-center _w-full _p-xxs`}
                        onClick={props.toogleTab && props.toogleTab}>
                        {props.children}
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="_w-full _p-none _border _border-solid _border-primary _mt-md  _justify-around _hidden lg:_flex _cursor-pointer">
                    <li
                        className={`${
                            props.isActive && props.isActive ? '_text-white _bg-primary' : ''
                        } _text-primary _flex _justify-center _w-full _p-xxs`}
                        onClick={props.toogleTab && props.toogleTab}>
                        {props.children}
                    </li>
                </ul>
            );
        }
    };

    return tabStyle();
};

export default Tab;
