// I M P O R T

// Modules
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// S T Y L E S

const StyledList = styled.ul`

    position: absolute;
    top: 48vh;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    a {
        font-size: 20px;
        line-height: 30px;

        background: #8495eb;
        border-radius: 20px;
        padding: 5px 15px;
    }

    a:hover {
        background: #ffb9ff;
    }


`;

// E X P O R T

export default function Portfolio() {

    // R E T U R N

    return <div style={{
        background: '#d5e9ff',
        width: '100vw',
        height: '200vh'
    }}>
        <StyledList>
            <li><Link to='/work/project1'>
                Project 1
            </Link></li>
            <li><Link to='/work/project2'>
                Project 2
            </Link></li>
            <li><Link to='/work/project3'>
                Project 3
            </Link></li>
        </StyledList>
    </div>;

}