import React, { useEffect } from "react";
import "./style.css";
import BackgroundImage from "../../components/BackgroundImage";
import homePic from "../../assets/images/homepage.jpg";
import HomeHeader from "../../components/HomeHeader";
import Footer from "../../components/Footer";
import HomeCountdown from "../../components/HomeCountdown";

function HomePage() {
    return (
        <div>
            <BackgroundImage image={homePic}>
                <nav className="uk-navbar-container home-navbar" uk-navbar="true">
                    <div className="uk-navbar-right">
                        <a className="home-menu" href="#menu-canvas" uk-toggle="target: #menu-canvas">
                            <span uk-icon="icon: menu; ratio: 1.5"></span>
                        </a>
                    </div>
                </nav>
                <HomeHeader />
                <HomeCountdown />
            </BackgroundImage>
            <Footer />
        </div>
    )
};

export default HomePage;