import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { like, deleteLike } from "../../../redux";
import { connect } from "react-redux";

class LikeButton extends Component {
  handleLikeButton = (event) => {
    event.preventDefault();
    // is there a like?
    for (let i = 0; i < this.props.likes.length; i++) {
      if (this.props.likes[i].username === this.props.username) {
        // delete a like
        this.props
          .deleteLike(this.props.likes[i].id)
          .then((event) => window.location.reload());
        return;
      }
    }
    // add a like
    this.props
      .like({ messageId: this.props.id })
      .then((event) => window.location.reload());
  };

  render() {
    return (
      <Button as="div" labelPosition="right" onClick={this.handleLikeButton}>
        <Button icon primary>
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic pointing="left">
          {this.props.likes.length}
        </Label>
      </Button>
    );
  }
}

export default connect(
  (state) => ({
    username: state.auth.login.result.username,
  }),
  { like, deleteLike }
)(LikeButton);
