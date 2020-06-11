import React from "react";
import { LoginForm } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import Button from "react-bootstrap/Button";
import "./Home.scss";
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
      <div className={`Home ${this.state.darkMode ? "darkmode" : "lightmode"}`}>
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
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
