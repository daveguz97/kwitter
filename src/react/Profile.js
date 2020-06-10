import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import UpdateAbout from "./UpdateAbout";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <button onClick={UpdateAbout}>Update About</button>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
