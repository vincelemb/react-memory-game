import React from 'react'

type LayoutProps = {
    // mobileLayout?:boolean;
    desktopLayout?:boolean;
    col:number;
    spacing: string;
}

const Layout:React.FC<LayoutProps> = (props: React.PropsWithChildren<LayoutProps>) => {

    const layout = props.desktopLayout ? 'Grid' : '';

    return(
        <section className={`${layout} _col-${props.col} _flex`}>
            {React.Children.map(props.children, (child) => {
                return (<section className={props.spacing}>{child}</section>)
            })}
        </section>
    )
}

export default Layout;