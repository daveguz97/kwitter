import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Register from "./Register";
import "./App.scss";
import MessageFeed from "./MessageFeed";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profiles/:username" component={Profile} />
          <Route exact path="/messagefeed" component={MessageFeed} />
          <Route exact path="/register-form" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
