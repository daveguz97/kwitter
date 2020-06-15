import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "../../HOCs";
import DeleteMessageButton from "../delete-message/DeleteMessageButton";
import LikeButton from "../like-button/LikeButton";

// import "./Message.css"

class MessageCard extends Component {
  render() {
    return (
      <Card id="messagecard">
        <Card.Content header={this.props.username} />
        <Card.Content description={this.props.text} />
        <Card.Content extra>
          <p>
            Created: {new Date(this.props.createdAt).toDateString()}
            <div>
              <LikeButton likes={this.props.likes} id={this.props.id} />
              {this.props.username === this.props.logInUser && (
                <DeleteMessageButton id={this.props.id} />
              )}
            </div>
          </p>
        </Card.Content>
      </Card>
    );
  }
}

export default connect((state) => ({
  logInUser: state.auth.login.result.username,
}))(MessageCard);
