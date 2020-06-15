import React from "react";
// import { Menu } from './components';
import { userIsAuthenticated } from "./HOCs";
import { ProfilePage } from "./components";
import { MessageMenu } from "./components";
import { Grid } from "./components";
import NavigationBar from "../react/components/navigation-bar/NavigationBar";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <NavigationBar isAuthenticated={this.props.isAuthenticated} />
            </Grid.Column>
            <Grid.Column>
              <ProfilePage />
            </Grid.Column>
            <Grid.Column>
              <MessageMenu isUserList={true} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}
export default userIsAuthenticated(Profile);
