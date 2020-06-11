import React from "react";
import { LoginForm } from "./components";
import "./Home.scss";
import { userIsNotAuthenticated } from "./HOCs";
import Button from "react-bootstrap/Button";
class Home extends React.Component {
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
      <main className={this.state.darkMode ? "darkmode" : "lightmode"}>
        <div className="options">
          <Button id="dark-mode-btn" variant="dark" onClick={this.setDarkMode}>
            Dark Mode
          </Button>
          <Button
            id="light-mode-btn"
            variant="light"
            onClick={this.setLightMode}
          >
            Light Mode
          </Button>
        </div>
        <LoginForm darkMode={this.state.dark} />
      </main>
    );
  }
}

export default userIsNotAuthenticated(Home);
