import React, { useEffect, setState } from 'react';
import "./style.css";
import BackgroundImage from "../../components/BackgroundImage";
import homePic from "../../assets/images/homepage.jpg";
import HomeHeader from "../../components/HomeHeader";
import Footer from "../../components/Footer";
import HomeCountdown from "../../components/HomeCountdown";
import { useAuth0 } from "@auth0/auth0-react";
import UserAPI from "../../utils/UserAPI";

function HomePage() {
    const { user } = useAuth0();
    console.log(user);

    useEffect(() => {
        UserAPI.findUser(user.email)
            .then(res => {
                console.log(res.data);
                if (res.data === null || res.data.length === 0) {
                    UserAPI.addUser({ email: user.email })
                        .then(res => {
                            console.log("new user created")
                            console.log(res);
                        })
                        .catch(err => console.log(err));
                } else {
                    console.log("user already exists")
                }
            })
            .catch(err => console.log(err));
    }, []);

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