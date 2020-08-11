import React from "react";
import "./style.css";
import BackgroundImage from "../../components/BackgroundImage";
import image from "../../assets/images/homepage.jpg";
import LoginContainer from "../../components/LoginContainer";
import SignupForm from "../../components/SingupForm";
import Navbar from "../../components/Navbar";
import LoginBtn from "../../components/LoginBtn";
import Footer from "../../components/Footer";

function SignupPage() {
    return (
        <div>
            <BackgroundImage image={image}>
                <Navbar accountBtn={"none"} />
                <LoginContainer name="Sign Up">
                    <SignupForm />
                    <div className="uk-text-center">
                        <p>Or login
                        <LoginBtn> here</LoginBtn>
                        </p>
                    </div>
                </LoginContainer>
            </BackgroundImage>
            <Footer />
        </div>
    )
};

export default SignupPage;