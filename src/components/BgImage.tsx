import React from 'react'

type PropsBgImage = {
    imageUrl:string;

}

const BgImage:React.FC<PropsBgImage> = (props: React.PropsWithChildren<PropsBgImage>) => {
    return (
        <div className={`_bg-cover _h-screen _overflow-auto`} style={{backgroundImage: `url(${props.imageUrl})`}}>
            {props.children}
        </div>
    );

}

export default BgImage;