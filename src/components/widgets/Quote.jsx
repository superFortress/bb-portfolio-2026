// I M P O R T

// Styles
import '#styles/components/widgets/Quote.css';

// E X P O R T

export default function Quote({

    children = [],

    // Arguments
    color = undefined

}) {

    // A S S I G N

    // Components
    const childArray = [children].flat();
    const quote = childArray.find((child) => child.type === 'blockquote') || null;
    const caption = childArray.find((child) => child.type === 'figcaption') || null;

    // R E T U R N

    return <figure className="quote" style={{ color }}>
        {quote && <blockquote>
            &ldquo;&#8202;{quote.props.children}&#8202;&rdquo;
        </blockquote>}
        {caption && <figcaption>
            &mdash; {caption.props.children}
        </figcaption>}
    </figure>;

}