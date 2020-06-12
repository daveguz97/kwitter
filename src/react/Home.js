import React from "react";
import { LoginForm } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import Button from "react-bootstrap/Button";
import "./Home.scss";
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <LoginForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
