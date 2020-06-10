import React from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { login } from '../../redux';
import './LoginForm.css';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class LoginForm extends React.Component {
  state = { username: '', password: '' };

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
      <React.Fragment>
        <div className='login-form-wrapper'>
          <h2>Kwitter for you Quiters.</h2>
          <Form id='login-form' onSubmit={this.handleLogin}>
            <Form.Field>
              <label>Username</label>
              <input
                type='text'
                name='username'
                autoFocus
                placeholder='Username'
                required
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type='password'
                placeholder='Password'
                name='password'
                required
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type='submit' disabled={loading}>
              Login
            </Button>
            <br />
            <Link to='/signup-form'> Sign Up for Kwitter!</Link>
          </Form>
          {loading && <Spinner name='circle' color='blue' />}
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
      </React.Fragment>
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
