// E X P O R T

export default function Titles({

    // Element
    titleBodyMapRef = null,
    titleElemMap = new Map(),

    // Geometry
    bannerFrame = {},
    bannerPoint = {},
    zIndex = 0,

    // Matter
    useUpdate = null


}) {

    // A S S I G N

    // Variable
    const banner = { ...bannerFrame, ...bannerPoint };

    // U P D A T E

    useUpdate(() => (
        titleBodyMapRef.current.forEach((title) => {
            const elem = titleElemMap.get(title.key)?.ref?.current;
            if (!elem) return;
            const x = (title.position.x - banner.x) / banner.width * 100;
            const y = (title.position.y - banner.y) / banner.height * 100;
            elem.style.backgroundColor = title.color;
            elem.style.top = `${y}%`;
            elem.style.left = `${x}%`;
        })
    ));

    // R E T U R N

    return <div style={{
        width: banner.width,
        height: banner.height,

        position: 'absolute',
        top: banner.y,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: zIndex
    }}>
        {[...titleElemMap.values()].map((title) => (
            <div key={title.key} ref={title.ref} style={{
                backgroundColor: 'var(--color-gray4)',
                maskImage: `url(${title.src})`,
                maskRepeat: 'no-repeat',
                maskSize: '100%',
                width: `${title.width}%`,
                height: `${title.height}%`,

                position: 'absolute',
                top: `${title.y}%`,
                left: `${title.x}%`,
                transform: `
                    translate(-50%, -50%)
                    rotate(${title.angle}deg)
                `
            }} />
        ))}
    </div>;

}