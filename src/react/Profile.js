import React from 'react';
import { Menu } from './components';
import { userIsAuthenticated } from './HOCs';
import { ProfilePage } from './components';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ProfilePage />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
