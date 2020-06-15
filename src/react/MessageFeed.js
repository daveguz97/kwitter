import React from "react";
import { userIsAuthenticated } from "./HOCs";
import MessageMenu from "../react/components/message-menu/MessageMenu";
import AddMessageCard from "../react/components/add-message/AddMessageCard";
import NavigationBar from "../react/components/navigation-bar/NavigationBar";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn width={5}>
              <NavigationBar isAuthenticated={this.props.isAuthenticated} />
            </GridColumn>
            <GridColumn>
              <h2>Message Feed</h2>

              <AddMessageCard />
              <MessageMenu isUserList={false} />
            </GridColumn>
          </GridRow>
        </Grid>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
