import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WhenPage from "./pages/WhenPage";
import WherePage from "./pages/WherePage";
import WhoPage from "./pages/WhoPage";
import MobileMenu from "./components/Navbar/MobileMenu";
import AboutCanvas from "./components/AboutCanvas";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    < Router >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/where" component={WherePage} />
        <Route exact path="/when" component={WhenPage} />
        <Route exact path="/who" component={WhoPage} />
        <Route component={NoMatch} />
      </Switch>
      <MobileMenu />
      <AboutCanvas />
    </Router >
  );
}

export default App;
