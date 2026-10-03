// I M P O R T

// Assets
import { media } from '#assets/vector/index.jsx';

// Modules
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

// Utils
import clamp from '#utils/clamp/clamp.js';
import pathToString from '#utils/string/pathToString.js';
import useListener from '#utils/hook/useListener.js';

// E X P O R T

export default function Desktop(props) {

    // A S S I G N

    // Reference
    const audioSliderRef = useRef(null);
    const videoRef = useRef(null);
    const videoSliderRef = useRef(null);

    // State
    const [isAdjustingAudio, setAdjustingAudio] = useState(false);
    const [isAdjustingVideo, setAdjustingVideo] = useState(false);
    const [isHoveringVideo, setHoveringVideo] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [audioPercent, setAudioPercent] = useState(100);
    const [videoPercent, setVideoPercent] = useState(0);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [videoStopped, setVideoStopped] = useState(true);

    // Condition
    const isActive = props.isActive ?? true;
    const showControl =
        videoStopped ? false :
            isHoveringVideo ? true :
                videoPlaying ? false : true;

    // Variable
    const color = props.color || undefined;
    const image = props.poster || '/assets/images/utility/missing-image.png';
    const label = props.alt || pathToString(props.src, 2, true);
    const video = props.src || null;

    // F U N C T I O N

    // Get slider position
    const adjustRatio = (event, target) => {
        const clientRect = { x: event.clientX };
        const targetRect = target.getBoundingClientRect();
        const ratio = (clientRect.x - targetRect.x) / targetRect.width;
        return ratio < 0 ? 0 : ratio > 1 ? 1 : ratio;
    };

    // Set audio slider position
    const adjustAudio = (event) => {
        const audioSlider = audioSliderRef.current;
        const video = videoRef.current;
        // Calculate ratio
        const ratio = adjustRatio(event, audioSlider);
        const percent = ratio * 100;
        // Apply to video
        setAudioPercent(percent);
        video.volume = ratio;
        if (video.muted && ratio > 0) toggleAudio();
        if (!video.muted && ratio === 0) toggleAudio();
    };

    // Set video slider position
    const adjustVideo = (event) => {
        const video = videoRef.current;
        const videoSlider = videoSliderRef.current;
        // Calculate ratio
        const ratio = adjustRatio(event, videoSlider);
        const percent = ratio * 100;
        const time = video.duration * ratio;
        // Apply to video
        if (!video.paused) video.pause();
        setVideoPercent(percent);
        video.currentTime = time;
    };

    // Cancel adjustments on mouse up
    const onMouseDown = (down) => {
        const video = videoRef.current;
        if (down) return;
        if (isAdjustingAudio) {
            setAdjustingAudio(false);
        }
        if (isAdjustingVideo) {
            setAdjustingVideo(false);
            if (videoPlaying) video.play();
        }
    };

    // Move forward or backward in time
    const skipVideo = (time) => {
        const video = videoRef.current;
        const newTime = clamp(video.currentTime + time, 0, video.duration);
        video.currentTime = newTime;
    };

    // Stop and reset video
    const stopVideo = (delay = 0) => {
        setVideoPlaying(false);
        setVideoStopped(true);
        setVideoPercent(0);
        const video = videoRef.current;
        if (!video) return;
        setTimeout(() => video.pause(), delay);
        setTimeout(() => video.currentTime = 0, delay);
    };

    // Turn audio on or off
    const toggleAudio = () => {
        const video = videoRef.current;
        if (video.muted) {
            setAudioEnabled(true);
            if (audioPercent === 0) setAudioPercent(100);
            video.muted = false;
        } else {
            setAudioEnabled(false);
            video.muted = true;
        }
    };

    // Play or pause video
    const toggleVideo = () => {
        const video = videoRef.current;
        if (video.paused) {
            setVideoPlaying(true);
            video.play();
        } else {
            setVideoPlaying(false);
            video.pause();
        }
        if (videoStopped) {
            setHoveringVideo(true);
            setVideoStopped(false);
        }
    };

    // Update video timeline
    const updateVideo = () => {
        const video = videoRef.current;
        const percent = video.currentTime / video.duration * 100;
        setVideoPercent(percent);
    };

    // E F F E C T

    // Disable media keys
    useEffect(() => {
        navigator.mediaSession.setActionHandler('play', () => { });
        navigator.mediaSession.setActionHandler('pause', () => { });
        navigator.mediaSession.setActionHandler('seekbackward', () => { });
        navigator.mediaSession.setActionHandler('seekforward', () => { });
        navigator.mediaSession.setActionHandler('previoustrack', () => { });
        navigator.mediaSession.setActionHandler('nexttrack', () => { });
    }, []);

    // Stop and reset video when inactive
    useEffect(() => {
        // Delay to allow for smooth fade
        if (!isActive) setTimeout(stopVideo, 200);
    }, [isActive]);

    // Respond to changes in video
    useListener(videoRef, 'ended', () => stopVideo(1000));
    useListener(videoRef, 'timeupdate', updateVideo);

    // Respond to keyboard events
    useListener(window, 'keydown', (event) => {
        const keyCode = event.code;
        if (videoStopped) return;
        if (keyCode === 'Space' || keyCode === 'KeyK') {
            event.preventDefault();
            toggleVideo();
        }
        if (keyCode === 'ArrowLeft' || keyCode === 'KeyJ') {
            event.preventDefault();
            skipVideo(-5);
        }
        if (keyCode === 'ArrowRight' || keyCode === 'KeyL') {
            event.preventDefault();
            skipVideo(5);
        }
    });

    // Respond to mouse events
    useListener(window, 'mousedown', () => onMouseDown(true));
    useListener(window, 'mouseup', () => onMouseDown(false));
    useListener(window, 'mousemove', (event) => {
        if (isAdjustingAudio) adjustAudio(event);
        if (isAdjustingVideo) adjustVideo(event);
    });

    // R E T U R N

    return <div
        className="video"
        onMouseEnter={() => isActive && setHoveringVideo(true)}
        onMouseLeave={() => isActive && setHoveringVideo(false)}
        style={{ '--video-control-front-color': color }}
    >
        {/* Content */}

        <div className="video__content">
            <motion.img
                loading="lazy"
                alt={label}
                src={image}
                initial={{
                    opacity: 1,
                    scale: 1
                }}
                animate={{
                    opacity: videoStopped ? 1 : 0,
                    scale: isHoveringVideo ? 1.02 : 1
                }}
                transition={{
                    duration: isHoveringVideo ? 0.9 : 0.2,
                    ease: isHoveringVideo ? 'easeOut' : 'easeInOut'
                }}
            />
            <motion.video
                preload="auto"
                ref={videoRef}
                src={video}
                animate={{
                    opacity: videoStopped ? 0 : 1
                }}
            />
        </div>

        {/* Control */}

        <motion.div
            className="video__control"
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: showControl ? 1 : 0
            }}
            style={{
                pointerEvents: showControl ? 'all' : 'none'
            }}
        >
            <button
                className="video__control-button"
                onClick={() => isActive && toggleVideo()}
                style={{ width: '60px' }}
            >
                {videoPlaying ? <media.pause /> : <media.play />}
            </button>
            <div
                ref={videoSliderRef}
                className="video__control-slider"
                onMouseDown={(event) => {
                    if (isActive === false) return;
                    setAdjustingVideo(true);
                    adjustVideo(event);
                }}
                style={{ flex: 'auto' }}
            >
                <div
                    className="video__control-slider-dial"
                    style={{ left: videoPercent + '%' }}
                />
                <div
                    className="video__control-slider-fill"
                    style={{ width: videoPercent + '%' }}
                />
                <div className="video__control-slider-line" />
            </div>
            <button
                className="video__control-button"
                onClick={() => isActive && toggleAudio()}
                style={{ padding: '0 14px 0 16px' }}
            >
                {audioEnabled ? <media.soundOn /> : <media.soundOff />}
            </button>
            <div
                ref={audioSliderRef}
                className="video__control-slider"
                onMouseDown={(event) => {
                    if (isActive === false) return;
                    setAdjustingAudio(true);
                    adjustAudio(event);
                }}
                style={{ width: 'clamp(50px, 12%, 100px)' }}
            >
                <div
                    className="video__control-slider-dial"
                    style={{ left: audioEnabled ? audioPercent + '%' : 0 }}
                />
                <div
                    className="video__control-slider-fill"
                    style={{ width: audioEnabled ? audioPercent + '%' : 0 }}
                />
                <div className="video__control-slider-line" />
            </div>
        </motion.div>

        {/* Overlay */}

        <div
            className="video__overlay"
            onClick={() => isActive && toggleVideo()}
        >
            <motion.button
                className="video__overlay-button"
                initial={{
                    width: '12%',
                    opacity: 1
                }}
                animate={{
                    width: isHoveringVideo ? '11.5%' : '12%',
                    opacity: videoStopped ? 1 : 0
                }}
                transition={{
                    duration: isHoveringVideo ? 0.9 : 0.3,
                    ease: 'easeOut'
                }}
            >
                <media.play />
            </motion.button>
            <motion.div
                className="video__overlay-dimmer"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: videoStopped && !isHoveringVideo ? 0.25 : 0
                }}
                transition={{
                    type: 'spring',
                    stiffness: isHoveringVideo ? 20 : 40
                }}
            />
            <motion.div
                className="video__overlay-shadow"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: showControl ? 1 : 0
                }}
            />
        </div>

    </div>;

}