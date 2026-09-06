// I M P O R T

// Modules
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// S T Y L E S

const style = ({ $fillColor, $textColor }) => css`

    /* G E N E R A L */

    /* .button */

    align-items: center;
    display: inline-flex;

    user-select: none;

    /* .button-inset */

    .button-inset {
        color: ${$textColor || 'inherit'};
        font-family: 'Geist', sans-serif;

        background: ${$fillColor || 'transparent'};
        border-color: ${$fillColor ? 'transparent' : 'currentColor'};
        border-style: solid;
        border-width: 1.5px;

        align-items: center;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
    }

    /* D E S K T O P */

    @media (min-width: 768px) {

        /* .button */

        padding: 0 5px;
        height: 55px;

        /* .button-inset */

        .button-inset {
            font-size: 22px;
            line-height: 25px;

            border-radius: 22.5px;
            box-shadow: ${$fillColor ? 'var(--box-shadow1)' : 'var(--box-shadow0)'};
            padding: 0 15px;
            height: 45px;

            position: relative;
            top: ${$fillColor ? '-2px' : '0px'};

            gap: 9px;

            transition: all 0.2s ease-in-out;
        }

        &:hover .button-inset {
            box-shadow: var(--box-shadow0);

            top: ${$fillColor ? '0px' : '-5px'};
        }

        .button-inset > svg {
            height: 24px;
        }

    }

    /* M O B I L E */

    @media (max-width: 767px) {
        
        /* .button */
        
        padding: 0 5px;
        height: 45px;


        /* .button-inset */

        .button-inset {
            font-size: 18px;
            line-height: 20px;

            border-radius: 17.5px;
            padding: 0 10px;
            height: 35px;

            gap: 7px;
        }

        .button-inset > svg {
            height: 21px;
        }

    }

`;

const StyledButton = styled.button`${style}`;

const StyledLink = styled(Link)`${style}`;

// E X P O R T

export default function Button({

    fillColor = '',
    textColor = '',

    children = <></>,
    onClick = () => { },
    to = '',

}) {

    // R E T U R N

    if (to.length) return <StyledLink
        className="button"
        to={to}
        $fillColor={fillColor}
        $textColor={textColor}
    >
        <div className="button-inset">
            {children}
        </div>
    </StyledLink>;

    else return <StyledButton
        className="button"
        onClick={onClick}
        $fillColor={fillColor}
        $textColor={textColor}
    >
        <div className="button-inset">
            {children}
        </div>
    </StyledButton>;

}