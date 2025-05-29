import React, { useState } from "react";

const Contact = () => {
    const preventSubmit = (e) => {
        e.preventDefault(); // Prevent form from submitting or reloading the page
    };

    return (
        <div className="contact-container">
            <h2 className="text-center mt-48">Contact Us</h2>
            <form className="contact-form" onSubmit={preventSubmit}>
                <label>Name:</label>
                <input type="text" name="name" required />

                <label>Email:</label>
                <input type="email" name="email" required />

                <label>Message:</label>
                <textarea name="message" rows="4" required />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
