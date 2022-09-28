import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <details>
                <summary>How does React work?</summary>
                ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code
            </details>
            <details>
                <summary>What is difference between state and props in React?</summary>
                Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
            </details>
            <details>
                <summary>What are some other use cases for the useEffect () hook?</summary>
                useEffect use cases
                    Running once on mount: fetch API data.
                    Running on state change: validating input field.
                    Running on state change: live filtering.
                    Running on state change: trigger animation on new array value.
                    Running on props change: update paragraph list on fetched API data update.
            </details>
        </div>
    );
};

export default Footer;