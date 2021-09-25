import React, { useState } from 'react';
import './MainContact.css';

const MainContact = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue({ value: e.target.value });
    };

    return (
        <section className="contact-section text-center">
            <div className="backgroundpic" />
            <div className="headerrrr">
                <h1>Contact us</h1>
                <h3>Please fill this form</h3>
            </div>
            <div className="container text-center mainform">
                <form className="formco col-9">
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder="input your name hare.."
                        className="form-control bg-dark text-white"
                    />
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder="subject.."
                        className="form-control bg-dark text-white my-3"
                    />
                    <textarea
                        cols="30"
                        rows="8"
                        value={value}
                        onChange={handleChange}
                        placeholder="textarea.."
                        className="form-control bg-dark text-white my-3"
                    />
                    <input className="btn btn-primary px-5 mb-3" type="submit" value="submit" />
                </form>
            </div>
        </section>
    );
};
export default MainContact;
