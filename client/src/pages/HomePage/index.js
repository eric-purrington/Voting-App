import React from "react";
import "./style.css";
import BackgroundImage from "../../components/BackgroundImage";
import homePic from "../../assets/images/homepage.jpg";
import Navbar from "../../components/Navbar";
import HomeHeader from "../../components/HomeHeader";
import AccountDropdown from "../../components/Navbar/AccountDropdown";

function HomePage() {
    return (
        <div>
            <BackgroundImage image={homePic}>
                <Navbar />
                <HomeHeader />
            </BackgroundImage>
        </div>
    )
};

export default HomePage;