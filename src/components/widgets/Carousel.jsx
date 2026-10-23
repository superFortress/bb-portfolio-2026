// I M P O R T

// Elements
import Video from './Video';

// Modules
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Styles
import '#styles/components/widgets/Carousel.css';

// Utils
import debounce from '#utils/time/debounce.js';

// E X P O R T

export default function Carousel({

    array = [],
    aspectRatio = 16 / 9,
    color = undefined

}) {

    // A S S I G N

    // References
    const listRef = useRef(null);

    // States
    const [hasLoaded, setHasLoaded] = useState(false);
    const [itemHoverIndex, setItemHoverIndex] = useState(0);
    const [itemIndex, setItemIndex] = useState(0);

    // Stores
    const { body, device } = useClientStore();
    const isDesktop = device !== 'mobile';
    const isMobile = device === 'mobile';

    // E F F E C T

    // Delay placement until body has been populated
    useEffect(() => {
        setHasLoaded(body.width > 0);
    }, [body]);

    // D E F I N E

    // Calculate item offset
    const itemWidth = listRef?.current?.offsetWidth || 0;
    const itemInset = isDesktop ? 60 : -30;
    const itemOffset = window.innerWidth / 2 + itemWidth / 2 - itemInset;

    // Calculate list offset
    const itemHover = Math.sign(itemIndex - itemHoverIndex) * 30;
    const listOffset = itemIndex * -itemOffset + itemHover;

    // F U N C T I O N

    const onClick = (index) => {
        onMouseEnter(-1);
        setItemHoverIndex(index);
        setItemIndex(index);
    };

    const onDrag = (_, info) => {
        const x = info.offset.x;
        if (x > -50 && x < 50) return;
        if (x < -50) onClick(Math.min(itemIndex + 1, array.length - 1));
        if (x > 50) onClick(Math.max(itemIndex - 1, 0));
    };

    const onMouseEnter = useMemo(() => debounce((index) => {
        if (isMobile) return;
        if (index < 0) return;
        setItemHoverIndex(index);
    }, 400, false, true), [isMobile]);

    const onMouseLeave = () => {
        if (isMobile) return;
        setItemHoverIndex(itemIndex);
    };

    // R E T U R N

    return <div className="carousel" style={{
        '--carousel-control-color': color,
        '--carousel-control-color-active': color
    }}>

        {/* Gallery */}

        <motion.ul
            className="carousel__gallery"
            ref={listRef}
            style={{ aspectRatio }}
            // Drag
            drag={isMobile ? 'x' : undefined}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            dragTransition={{ bounceStiffness: 400 }}
            onDragEnd={onDrag}
            // Motion
            initial={{ left: 0 }}
            animate={{ left: listOffset }}
        >
            {array.map((item, index) => {
                const isActive = index === itemIndex;
                const isHovered = index === itemHoverIndex;
                const extension = item.src.split('.').pop().toLowerCase();
                const isVideo = ['mov', 'mp4', 'webm'].includes(extension);
                const isImage = ['gif', 'jpeg', 'jpg', 'png'].includes(extension);
                return <li
                    key={index}
                    onClick={() => onClick(index)}
                    onMouseEnter={() => !isActive && onMouseEnter(index)}
                    onMouseLeave={() => !isActive && onMouseLeave()}
                    style={{
                        aspectRatio,
                        opacity: index && !hasLoaded ? 0 :
                            isActive || isHovered ? 1 : 0.2,
                        left: index * itemOffset,
                        cursor: !isActive ? 'pointer' : 'auto',
                        transition: 'opacity 0.25s ease-out'
                    }}
                >
                    <figure>
                        {isImage && <img
                            alt={item.alt || undefined}
                            src={item.src}
                        />}
                        {isVideo && <Video
                            {...item}
                            isActive={isActive}
                        />}
                    </figure>
                </li>
            })}
        </motion.ul>

        {/* Control */}

        {array.length > 1 && <ul className="carousel__control">
            {array.map((_, index) => {
                const isActive = index === itemIndex;
                return <li
                    key={index}
                    aria-current={isActive || undefined}
                >
                    <button
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => onClick(index)}
                    />
                </li>;
            })}
        </ul>}

    </div>;

}