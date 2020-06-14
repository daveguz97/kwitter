import React from "react";
import { Link } from "react-router-dom";
// import "./NavigationBar.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
import { Menu, Image } from "semantic-ui-react";
import Kwitterlogo from "../img/kwitter-logo.png";

class NavigationBar extends React.Component {
  state = { activeItem: "Profile" };
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div id="menu">
        <h1 id="title">Kwitter</h1>
        <div className="logo-wrapper">
          <Image
            src={Kwitterlogo}
            size="small"
            alt=""
            className="ui-small-image"
            circular
          />
        </div>
        <br />
        <div id="menu-links">
          {this.props.isAuthenticated && (
            <Menu pointing secondary vertical>
              <Link to="/profiles/:username">
                <Menu.Item
                  name="Profile"
                  active={activeItem === "Profile"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/messagefeed">
                <Menu.Item
                  name="Message Feed"
                  active={activeItem === "Message Feed"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/" onClick={this.handleLogout}>
                <Menu.Item
                  name="Logout"
                  active={activeItem === "Logout"}
                  onClick={this.handleItemClick}
                />
              </Link>
            </Menu>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error,
  }),
  { logout }
)(NavigationBar);
