import React from "react";
import "./style.css";
import BackgroundImage from "../../components/BackgroundImage";
import image from "../../assets/images/homepage.jpg";
import LoginContainer from "../../components/LoginContainer";
import SignupForm from "../../components/SingupForm";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function SignupPage() {
    return (
        <BackgroundImage image={image}>
            <Navbar accountBtn={"none"} />
            <LoginContainer name="Sign Up">
                <SignupForm />
                <div className="uk-text-center">
                    <p>Or login
                        <Link to="/login" style={{ color: "#5A7EDE" }}> here</Link>
                    </p>
                </div>
            </LoginContainer>
        </BackgroundImage>
    )
};

export default SignupPage;