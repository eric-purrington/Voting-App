import React from "react";
import "./style.css";
import BackgroundImage from "../../components/BackgroundImage";
import homePic from "../../assets/images/homepage.jpg";
import HomeHeader from "../../components/HomeHeader";
import AccountDropdown from "../../components/Navbar/AccountDropdown";

function HomePage() {
    return (
        <div>
            <BackgroundImage image={homePic}>
                <nav className="uk-navbar-container home-navbar" uk-navbar="true">
                    <div className="uk-navbar-right">
                        <button className="uk-button uk-button-default home-account-btn">
                            MY ACCOUNT <span className="user-icon" uk-icon="user"></span>
                        </button>
                        <AccountDropdown />
                    </div>
                </nav>
                <HomeHeader />
            </BackgroundImage>
        </div>
    )
};

export default HomePage;