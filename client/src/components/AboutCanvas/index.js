/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function ContactCanvas() {
    return (
        <div id="about-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3 id="contact-title">About</h3>
                <p className="about-paragraph">
                    Vote Goat was developed by Alyssa Hellrung, Joanna Preston, Eric Purrington, and Sabah Syed as a capstone project for the University of Washington's Full Stack Web Development Boot Camp in Summer of 2020.
                    <br></br>
                    Our team is dedicated to civic engagement, and we realize finding information about voting can be difficult, especially for those who are newly of age or who are new U.S. citizens. 
                    This website allows anyone to enter their home address and easily find information about their local, state, and national elected officials. It allows users to find their assigned polling place or their nearest ballot drop-off box. And it displays a countdown to the upcoming general election and a calendar that features all upcoming state and local elections.
                    <br></br>
                    If a user would like to save information, like important dates or the contact information for their local representatives for example, they can create a free account on Vote Goat and save and see important information on their personal dashboard. 
                    <br></br>
                    We hope you find Vote Goat simple and useful!
                </p>
            </div>
        </div>
    )
};

export default ContactCanvas;