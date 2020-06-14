import React from 'react';
import { LoginForm, Menu } from './components';
import { userIsNotAuthenticated } from './HOCs';
// import Button from 'react-bootstrap/Button';
import './Home.scss';
class Home extends React.Component {
  render() {
    return (
      <main className='Home'>
        <LoginForm />
        <Menu />
      </main>
    );
  }
}

export default userIsNotAuthenticated(Home);
