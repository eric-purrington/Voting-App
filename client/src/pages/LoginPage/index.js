import React from "react";
import "./style.css";
import BackgroundImage from "../../components/BackgroundImage";
import image from "../../assets/images/homepage.jpg";
import LoginContainer from "../../components/LoginContainer";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <BackgroundImage image={image}>
            <Navbar accountBtn="none" />
            <LoginContainer name="Login">
                <LoginForm />
                <div className="uk-text-center">
                    <p>Or sign up
                        <Link to="/signup" style={{ color: "#5A7EDE" }}> here</Link>
                    </p>
                </div>
            </LoginContainer>
        </BackgroundImage>
    )
};

export default LoginPage;