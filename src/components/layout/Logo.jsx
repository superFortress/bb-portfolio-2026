// I M P O R T

// Modules
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// S T Y L E D

const StyledAnchor = styled.a`

    color: var(--app-logo-text-color);
    font-family: "Radio Canada Big", sans-serif;
    font-weight: 700;
    text-align: left;

    position: fixed;
    z-index: var(--app-logo-z-index);

    align-items: center;
    display: inline-flex;
    flex-wrap: nowrap;
    gap: 0.018em;
    overflow: hidden;

    pointer-events: all;
    user-select: none;

    @media (min-width: 768px) {
        font-size: 40px;

        padding: 0 5px;
        height: 45px;

        top: 43px;
        left: 40px;
    }

    @media (max-width: 767px) {
        font-size: 27px;

        padding: 0 3px;
        height: 35px;

        top: 10px;
        left: 10px;
    }

    span {
        position: relative;
        animation: header-logo-bounce 1.5s infinite ease-in-out;
    }

    span:nth-child(5n + 1) {
        transform: rotate(-7deg);
    }

    span:nth-child(5n + 2) {
        transform: rotate(2deg);
        animation-delay: -0.6s;
    }

    span:nth-child(5n + 3) {
        margin-right: 0.5px;
        transform: rotate(7deg);
        animation-delay: -1.2s;
    }

    span:nth-child(5n + 4) {
        margin-right: 1px;
        transform: rotate(-2deg);
        animation-delay: -0.3s;
    }

    span:nth-child(5n + 5) {
        transform: rotate(5deg);
        animation-delay: -0.9s;
    }

    @keyframes header-logo-bounce {
        0% { top: -0.125em }
        50% { top: 0.125em }
        100% { top: -0.125em }
    }

`;

// E X P O R T

export default function Logo() {

    // A S S I G N

    // Variables
    const navigate = useNavigate();

    // R E T U R N

    return <StyledAnchor onClick={() => navigate('/')}>
        {'Boriz'.split('').map((entry, index) => (
            <span key={index}>{entry}</span>
        ))}
    </StyledAnchor>;

}