import React from 'react';
import { userIsAuthenticated } from './HOCs';
import MessageMenu from './components/MessageMenu';
import AddMessageCard from './components/AddMessageCard';
import NavigationBar from './components/NavigationBar';
import { Grid, GridColumn } from 'semantic-ui-react';
import UsersList from './components/ListOfUsers';
class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Grid>
          <GridColumn width={3}>
            <NavigationBar isAuthenticated={this.props.isAuthenticated} />
          </GridColumn>
          <GridColumn width={5}>
            <h2>Message Feed</h2>
            <UsersList />
            <AddMessageCard />
            <MessageMenu isUserList={false} />
          </GridColumn>
        </Grid>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
