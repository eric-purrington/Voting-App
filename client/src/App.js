import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WhenPage from "./pages/WhenPage";
import WherePage from "./pages/WherePage";
import WhoPage from "./pages/WhoPage";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/Navbar/MobileMenu";
import AboutCanvas from "./components/AboutCanvas";

function App() {
  return (
    < Router >
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/where" component={WherePage} />
      <Route exact path="/when" component={WhenPage} />
      <Route exact path="/who" component={WhoPage} />
      <MobileMenu />
      <AboutCanvas />
      {/* <Footer /> */}
    </Router >
  );
}

export default App;
