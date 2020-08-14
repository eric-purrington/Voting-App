import React, { useEffect, setState } from 'react';
import './index.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
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
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import UserAPI from "./utils/UserAPI";

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    < Router history={history}>
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
