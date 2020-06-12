import React from "react";
import { LoginForm } from "./components";
import "./Home.scss";
import { userIsNotAuthenticated } from "./HOCs";
import Button from "react-bootstrap/Button";
class Home extends React.Component {
  render() {
    return (
      <main className="Home">
        <LoginForm />
      </main>
    );
  }
}

export default userIsNotAuthenticated(Home);
