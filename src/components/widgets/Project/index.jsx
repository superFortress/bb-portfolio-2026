// I M P O R T

// Components
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';

// Styles
import '#styles/components/pages/Project.css';

// E X P O R T

export default function Project({

    children,
    className

}) {

    // R E T U R N

    return <article className={`project ${className}`}>
        {children}
    </article>;

}

Object.assign(Project, {
    Aside,
    Footer,
    Header,
    Section 
});