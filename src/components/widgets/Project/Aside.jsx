// E X P O R T

export default function Aside({

    children,
    id,
    style,

    // Arguments
    paddingTop,
    paddingBottom,
    width = '100%',
    height = 'auto'

}) {

    // A S S I G N

    // Variables
    paddingTop = paddingTop === true
        ? 'var(--project-section-padding-top)' : paddingTop;
    paddingBottom = paddingBottom === true
        ? 'var(--project-section-padding-bottom)' : paddingBottom;

    // R E T U R N

    return <aside id={id} style={{
        paddingTop,
        paddingBottom,
        height,
        ...style
    }}>
        <div className="project__column" style={{ width }}>
            {children}
        </div>
    </aside>;

}