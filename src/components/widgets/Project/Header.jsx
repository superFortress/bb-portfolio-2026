// E X P O R T

export default function Header({

    children,
    id,
    style,

    // Arguments
    paddingTop = 'var(--project-header-padding-top)',
    paddingBottom = 'var(--project-header-padding-bottom)',
    width = 'var(--app-width)',
    height = 'auto'

}) {

    // R E T U R N

    return <header id={id} style={{
        paddingTop,
        paddingBottom,
        height,
        ...style
    }}>
        <div className="project__column" style={{ width }}>
            {children}
        </div>
    </header>;

}