// I M P O R T

// Package
import packageJSON from '../../../package.json';

// Styles
import '#styles/components/layout/Footer.css';

// E X P O R T

export default function Footer() {

    // A S S I G N

    // Variables
    const { author, version } = packageJSON;
    const year = new Date().getFullYear();

    // R E T U R N

    return <footer className="app-footer">
        <span>
            Website proudly designed and built by me.&nbsp;
            All rights reserved &copy; {author}, {year}.
        </span>
        <span>
            v{version}
        </span>
    </footer>;

}