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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vulputate nibh ut porta. Ut condimentum metus id dui fermentum aliquet. Ut facilisis congue tellus, non luctus eros suscipit id. Nam aliquam ligula at felis bibendum, at imperdiet tortor consequat. Phasellus pellentesque nulla ut mi aliquet commodo. Ut sit amet facilisis nibh. Suspendisse feugiat feugiat odio quis tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean sapien neque, fringilla eget vulputate in, placerat at leo. Nulla at pretium ex. Aenean eget accumsan neque, accumsan dignissim nisl. Sed eget ullamcorper eros.
                    <br /><br />
                    Integer ultricies et mi accumsan euismod. Nam purus mi, hendrerit vitae orci aliquet, hendrerit interdum sem. Sed at urna ut odio interdum imperdiet. Cras eleifend lobortis nunc, id fermentum odio scelerisque quis. Donec dapibus non libero sed sollicitudin. Sed rutrum quam nec dignissim varius. Ut sem nisl, aliquam quis aliquam eget, finibus in est. Ut quis magna vitae odio congue ornare. Etiam rutrum fermentum posuere. Curabitur diam quam, fringilla ut nulla blandit, tristique rutrum mi. Cras porta sagittis dui, sed aliquet risus. Nunc sed lorem nunc.
                </p>
            </div>
        </div>
    )
};

export default ContactCanvas;