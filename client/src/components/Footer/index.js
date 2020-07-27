
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="uk-text-center uk-text-middle footer">
            <span>
                ©
                <a className="contributor" href="https://github.com/jpreston-alt" target="_blank">Joanna Preston,</a>
                <a className="contributor" href="https://github.com/eric-purrington" target="_blank">Eric Purrington,</a>
                <a className="contributor" href="https://github.com/alyssahellrung" target="_blank">Alyssa Hellrung,</a>
                <a className="contributor" href="https://github.com/sabahsyed" target="_blank">Sabah Syed</a>
            </span>
            <br /><br />
            <span style={{ paddingTop: 20 }}>
                <a className="view-repo">
                    View project repository
                    <span uk-icon="icon: github" href="https://github.com/eric-purrington/Voting-App" className="contact-icon contact-link-icon" target="_blank"></span>
                </a>
            </span>
        </footer>
    )
};

export default Footer;