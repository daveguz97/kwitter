import React from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { login } from '../../redux/auth';
import { addUser } from '../../redux';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import logo from './kwitter_logo_small.jpg';

class RegistrationForm extends React.Component {
  state = { username: '', displayName: '', password: '' };

  handleRegistration = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    if (this.props.error === null) {
      return this.props.history.push('/');
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <React.Fragment>
        <div className='register-form-box'>
          <h1>Sign Up for Kwitter!</h1>
          <Form id='register-form' onSubmit={this.handleRegistration}>
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
              <label>Display Name</label>
              <input
                type='text'
                name='displayName'
                placeholder='Display Name'
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
              Register
            </Button>
            <br />
            <Link to='/'>Return to Login Page</Link>
          </Form>
          {loading && <Spinner name='circle' color='blue' />}
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
        <br />
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
