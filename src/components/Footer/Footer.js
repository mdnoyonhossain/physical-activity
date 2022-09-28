import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <details>
                <summary>Accordion One</summary>
                Body Content 1
            </details>
            <details>
                <summary>Accordion Two</summary>
                Body Content 2
            </details>
            <details>
                <summary>Accordion Two</summary>
                Body Content 2
            </details>
        </div>
    );
};

export default Footer;