// E X P O R T

export default function Section({

    children,
    id,
    style,

    // Arguments
    paddingTop = 'var(--project-section-padding-top)',
    paddingBottom = 'var(--project-section-padding-bottom)',
    width = 'var(--app-width)',
    height = 'auto'

}) {

    // R E T U R N

    return <section id={id} style={{
        paddingTop,
        paddingBottom,
        height,
        ...style
    }}>
        <div className="project__column" style={{ width }}>
            {children}
        </div>
    </section>;

}