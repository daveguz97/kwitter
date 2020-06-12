import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Register from "./Register";
import "./App.scss";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false };
  }

  setDarkMode = () => {
    this.setState({
      darkMode: true,
    });
  };

  setLightMode = () => {
    this.setState({
      darkMode: false,
    });
  };
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profiles/:username" component={Profile} />
          <Route exact path="/register-form" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
