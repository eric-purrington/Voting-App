/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function ContactCanvas() {
    return (
        <div id="about-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar uk-text-center">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3 id="contact-title">About</h3>
                <p className="about-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vulputate nibh ut porta. Ut condimentum metus id dui fermentum aliquet. Ut facilisis congue tellus, non luctus eros suscipit id. Nam aliquam ligula at felis bibendum, at imperdiet tortor consequat. Phasellus pellentesque nulla ut mi aliquet commodo. Ut sit amet facilisis nibh. Suspendisse feugiat feugiat odio quis tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean sapien neque, fringilla eget vulputate in, placerat at leo. Nulla at pretium ex. Aenean eget accumsan neque, accumsan dignissim nisl. Sed eget ullamcorper eros.
                </p>
            </div>
        </div>
    )
};

export default ContactCanvas;