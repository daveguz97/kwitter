import React from "react";
import { Link } from "react-router-dom";
// import "./NavigationBar.css";
import { connect } from "react-redux";
import { logout } from "../../../redux";
import { Menu, Image } from "semantic-ui-react";
import Kwitterlogo from "../../img/kwitter-logo.png";
import "./NavigationBar.scss";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "Profile" };
  }
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <nav className="NavigationBar">
        <div id="menu">
          <h1 id="title" className="text-center">
            Kwitter
          </h1>
          <div className="logo-wrapper">
            <Image
              src={Kwitterlogo}
              size="small"
              alt="Kwitter Logo"
              className="ui-small-image"
              circular
            />
          </div>
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
      </nav>
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
