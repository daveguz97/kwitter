import React from 'react';
// import { Menu } from './components';
import { userIsAuthenticated } from './HOCs';
import { ProfilePage } from './components/';
import { MessageMenu } from './components';
import { Grid } from './components';
import NavigationBar from './components/NavigationBar';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={3}>
            <NavigationBar isAuthenticated={this.props.isAuthenticated} />
          </Grid.Column>
          <Grid.Column width={3}>
            <ProfilePage />
            <MessageMenu isUserList={true} />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
export default userIsAuthenticated(Profile);
