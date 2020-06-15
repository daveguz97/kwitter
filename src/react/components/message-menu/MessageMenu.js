import React, { Component } from "react";
import { connect } from "react-redux";
import { MessageCard } from "..";
import { messageList } from "../../../redux";
import "./MessageMenu.scss";

class MessageMenu extends Component {
  state = {
    messages: [],
  };

  componentDidMount = () => {
    this.props
      .messageList(100, 0, this.props.isUserList ? this.props.username : null)
      .then((val) => this.setState({ messages: val.payload.messages }));
  };

  render() {
    return (
      <div className="message-list-wrapper">
        {this.state.messages.map((msg) => (
          <MessageCard
            className="message"
            id={msg.id}
            createdAt={msg.createdAt}
            key={msg.id}
            likes={msg.likes}
            text={msg.text}
            username={msg.username}
          />
        ))}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    result: state.messages.messageList.result,
    loading: state.messages.messageList.loading,
    error: state.messages.messageList.error,
    username: state.auth.login.result.username,
  }),
  { messageList }
)(MessageMenu);
