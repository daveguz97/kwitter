import React from "react";
import { LoginForm } from "./components";
import "./Home.scss";
import { userIsNotAuthenticated } from "./HOCs";
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
