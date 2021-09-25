import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const [fvalue, setFvalue] = useState('');
    const [subValue, setSubValue] = useState('');
    const [textAreaVal, setTextAreaVal] = useState('');

    const handleChange1 = (e) => {
        setFvalue(e.target.value);
    };

    const handleChange2 = (e) => {
        setSubValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const textAreaHandle = (e) => {
        setTextAreaVal(e.target.value);
    };

    return (
        <section className="contactForm">
            <div className="contactHeader">
                <h4 style={{ color: '#12D0D5' }}>Contact Us</h4>
                <h2>Always Connect With Us</h2>
            </div>

            <form onSubmit={handleSubmit} className="fFormContact">
                <input
                    type="text"
                    value={fvalue}
                    placeholder="enter your email.."
                    required
                    onChange={handleChange1}
                />

                <input
                    type="text"
                    placeholder="Subject..."
                    value={subValue}
                    onChange={handleChange2}
                />

                <textarea
                    value={textAreaVal}
                    onChange={textAreaHandle}
                    placeholder="Your Message..."
                    cols="30"
                    rows="6"
                />

                <input type="submit" value="submit" className="styles" />
            </form>
        </section>
    );
};
export default Form;
