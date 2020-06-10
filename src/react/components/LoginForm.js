import React from "react";
import Menu from "./Menu";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import KwitterLogo from "../img/kwitter-logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormText from "react-bootstrap/FormText";
import "./LoginForm.scss";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <section className="LoginForm my-auto text-center">
        <aside className="left-side">
          <Menu darkMode={this.state.darkMode} />
          <div className="text-center">
            <h1>Find Out What's happening</h1>
            <ul>
              <li>
                <i className="fas fa-user-friends"></i> Gain a Fan Base
              </li>
              <li>
                <i className="far fa-comment"></i> Post New Messages
              </li>
              <li>
                <i className="far fa-newspaper"></i> See the latest trends and
                news
              </li>
            </ul>
          </div>
        </aside>
        <Container className="mx-auto">
          <img src={KwitterLogo} alt="Kwitter Logo" />
          <h1>Sign In</h1>
          <form id="login-form" onSubmit={this.handleLogin}>
            <FormGroup>
              <FormControl
                type="text"
                name="username"
                placeholder="Username"
                autoFocus
                required
                onChange={this.handleChange}
              />
              <i className="fas fa-user-alt"></i>
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                name="password"
                placeholder="password"
                required
                onChange={this.handleChange}
              />
              <i className="fas fa-lock"></i>
            </FormGroup>
            <div className="mt-1">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me"> &nbsp; Remember Me</label>
            </div>
            <div>
              <FormText>
                <a href="#">New User? Sign Up</a>
              </FormText>
            </div>
            <Button
              type="submit"
              variant="outline-primary"
              className="mt-2"
              disabled={loading}
            >
              Login
            </Button>
            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
            <Button className="outline=primary mt-2">
              Sign In with <div className="fab fa-google"></div>
            </Button>
          </form>
        </Container>
      </section>
    );
  }
}

export default connect(
  (state) => ({
    result: state.auth.login.result,
    loading: state.auth.login.loading,
    error: state.auth.login.error,
  }),
  { login }
)(LoginForm);
