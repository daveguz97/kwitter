import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux/auth";
import { addUser } from "../../redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import kwitterLogo from "../img/kwitter-logo.png";
import "./RegistrationForm.scss";

class RegistrationForm extends React.Component {
  state = { username: "", displayName: "", password: "" };

  handleRegistration = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    if (this.props.error === null) {
      return this.props.history.push("/");
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <React.Fragment>
        <Container>
          <section className="register-section">
            <header>
              <div className="img-div">
                <img src={kwitterLogo} alt="Logo" className="logo" />
              </div>
              <h1 className="text-center">Sign Up for Kwitter!</h1>
            </header>
            <Form id="register-form" onSubmit={this.handleRegistration}>
              <Form.Field>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  autoFocus
                  placeholder="Username"
                  required
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Display Name</label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="Display Name"
                  required
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button primary type="submit" disabled={loading}>
                Register
              </Button>
              <br />
              <Link to="/">Return to Login Page</Link>
            </Form>
            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </section>
          <br />
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => ({
    result: state.user.addUser.result,
    loading: state.user.addUser.loading,
    error: state.user.addUser.error,
  }),
  { addUser, login }
)(withRouter(RegistrationForm));
