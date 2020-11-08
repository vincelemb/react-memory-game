import React from 'react'

type ContainerProps = {
    maxWidth:string;
    isCentered?:boolean;
    isCenteredX?:boolean;

}

const Container:React.FC<ContainerProps> = (props: React.PropsWithChildren<ContainerProps>) => {

    const centered = props.isCentered ? '_m-auto' : '';
    const centeredX = props.isCenteredX ? '_mx-auto' : '';
    
    return(
        <section className={`${centered} ${centeredX}`} style={{maxWidth:props.maxWidth}}>
            {props.children}
        </section>
    )

}

export default Container; 