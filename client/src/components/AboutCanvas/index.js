import React from "react";
import "./style.css";
import VoteLove from "../../assets/images/VoteLove.jpg";

function ContactCanvas() {
    return (
        <div id="about-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar uk-text-center">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3 id="contact-title">About</h3>
                <div className="about-paragraph">
                    <p>Vote Goat was developed by Alyssa Hellrung, Joanna Preston, Eric Purrington, and Sabah Syed as a capstone project for the University of Washington's Full Stack Web Development Boot Camp in Summer of 2020.</p>
                    <p>Our team is dedicated to civic engagement, and we realize finding information about voting can be difficult, especially for those who are newly of age or who are new U.S. citizens.</p> 
                    <p>This website allows anyone to enter their home address and easily find information about their local, state, and national elected officials. It allows users to find their assigned polling place or their nearest ballot drop-off box. And it displays a countdown to the upcoming general election and a calendar that features all upcoming state and local elections.</p>
                    <p>If a user would like to save information, like important dates or the contact information for their local representatives for example, they can create a free account on Vote Goat and save and see important information on their personal dashboard.</p> 
                    <p>We hope you find Vote Goat simple and useful!</p>
                  </div>
                  <div> 
                    <img className="uk-thumbnail" src={VoteLove} alt="Logo" />
                </div>
            </div>
        </div>
    )
};

export default ContactCanvas;