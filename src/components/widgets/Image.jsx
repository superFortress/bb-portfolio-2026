// E X P O R T

export default function Image({

    alt,
    src,

    // Arguments
    caption,
    color,
    width,
    height

}) {

    // R E T U R N

    return <figure>
        <img
            loading="lazy"
            alt={alt}
            src={src}
            style={{
                background: color,
                width,
                height,

                objectFit: 'contain'
            }}
        />
        {caption && <figcaption>
            {caption}
        </figcaption>}
    </figure>;

}