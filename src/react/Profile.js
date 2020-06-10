import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import UpdateProfile from "./UpdateProfile";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <button onClick={UpdateProfile}>Update Profile</button>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
