import React, { useState, useEffect } from 'react';
import { Tab } from '.';
import { useCurrentWidth } from '../logics';

type SubContentType = {
    title?: string;
    content: string | React.ReactElement;
};

type TabsGroupContent = {
    title: string;
    subcontent: string | SubContentType[] | React.ReactElement;
};

interface TabsGroupProps {
    noTabsonDesktop?: boolean;
    borderBottomStyle?: boolean;
    isCard?: boolean;
    contents: TabsGroupContent[];
}

const TabsGroup: React.FC<TabsGroupProps> = ({
    noTabsonDesktop,
    borderBottomStyle,
    isCard,
    contents,
}) => {
    const [idActive, setIdActive] = useState<number>(0);
    const [activeTabs, setActiveTabs] = useState<boolean>(false);

    let width = useCurrentWidth();
    useEffect(() => {
        width > 991 ? setActiveTabs(true) : setActiveTabs(false);
    }, [width]);

    const setActive = (idx: number): void => setIdActive(idx);

    const navigation = contents.map(({ title }, idx) => (
        <Tab
            key={idx}
            isActive={idActive === idx}
            borderBottomStyle={borderBottomStyle}
            toogleTab={() => setActive(idx)}>
            <span className="_uppercase _text-center">{title}</span>
        </Tab>
    ));

    const content = contents.map(({ subcontent }, idx) => {
        let returnedContent = Array.isArray(subcontent)
            ? subcontent.map(({ title, content }, idx) => (
                  <React.Fragment key={idx}>
                      {title && (
                          <h3 className="_mb-none _mt-sm _text-primary _text-lg _font-normal">
                              {title}
                          </h3>
                      )}
                      {content}
                  </React.Fragment>
              ))
            : subcontent;

        if (noTabsonDesktop) {
            if (activeTabs) {
                return (
                    <div key={idx} className={'_block lg:_hidden _w-full'}>
                        {subcontent}
                    </div>
                );
            } else {
                return (
                    <div
                        key={idx}
                        className={`${
                            idActive === idx ? '_block _w-full' : '_hidden'
                        }`}>
                        {returnedContent}
                    </div>
                );
            }
        } else {
            return (
                <div
                    key={idx}
                    className={`${
                        idActive === idx ? '_block _w-full' : '_hidden'
                    }`}>
                    {returnedContent}
                </div>
            );
        }
    });

    const background = isCard
        ? '_bg-white _rounded-small _p-xs'
        : '_bg-transparent';

    return (
        <section className={`${background}`}>
            <nav
                className={`_flex ${
                    activeTabs ? '_block lg:_hidden _mb-xs' : '_block _mb-xs'
                } `}>
                {navigation}
            </nav>
            <section className="_flex _w-full _justify-center">
                {content}
            </section>
        </section>
    );
};

export default TabsGroup;
