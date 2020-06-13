import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { connect } from "react-redux";
import { logout } from "../../redux";
import kwitterLogo from "../img/kwitter-logo.png";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        {this.props.isAuthenticated && (
          <>
            <img className="logo" src={kwitterLogo} alt="Kwitter Logo"></img>
            <div id="menu-links">
              <Link to="/messagefeed">Message Feed</Link>
              <Link to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            </div>
          </>
        )}
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
)(Menu);
