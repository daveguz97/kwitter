import React from 'react';
import Menu from './Menu';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { login } from '../../redux';
import { Link } from 'react-router-dom';
import KwitterLogo from '../img/kwitter-logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
// import GoogleLogin from "react-google-login";
import kwitterLogo from '../img/kwitter-logo.png';
import './LoginForm.scss';

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
      <section className='LoginForm my-auto text-center'>
        <aside className='left-side'>
          <Menu darkMode={this.state.darkMode} />
          <div className='text-center'>
            <img src={kwitterLogo} alt='Logo' className='logo' />
            <h1>Find Out What's happening</h1>
            <ul>
              <li>
                <i className='fas fa-user-friends'></i> Gain a Fan Base
              </li>
              <li>
                <i className='far fa-comment'></i> Post New Messages
              </li>
              <li>
                <i className='far fa-newspaper'></i> See the latest trends and
                news
              </li>
            </ul>
          </div>
        </aside>
        <Container className='mx-auto'>
          <img className='logo' src={KwitterLogo} alt='Kwitter Logo' />
          <h1>Sign In</h1>
          <form id='login-form' onSubmit={this.handleLogin}>
            <FormGroup>
              <FormControl
                type='text'
                name='username'
                placeholder='Username'
                autoFocus
                required
                onChange={this.handleChange}
              />
              <i className='fas fa-user-alt'></i>
            </FormGroup>
            <FormGroup>
              <FormControl
                type='password'
                name='password'
                placeholder='password'
                required
                onChange={this.handleChange}
              />
              <i className='fas fa-lock'></i>
            </FormGroup>
            <div>
              <FormText>
                <Link to='/register-form'> New User? Sign Up</Link>
              </FormText>
            </div>
            {/* <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  This is my custom Google button
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            , */}
            <Button
              type='submit'
              variant='outline-primary'
              className='mt-2'
              disabled={loading}
            >
              Login
            </Button>
            {loading && <Spinner name='circle' color='blue' />}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
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
