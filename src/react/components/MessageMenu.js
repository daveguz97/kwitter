import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MessageCard } from '.';
import { messageList } from '../../redux';
import './MessageMenu.scss';
import { Menu } from './';
import { userIsAuthenticated } from '../HOCs';
class MessageMenu extends Component {
  state = {
    messages: [],
    messageId: 0,
  };

  componentDidMount = () => {
    this.props.messageList();
  };

  render() {
    if (this.props.messages === null || this.props.user === null) {
      return (
        <>
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <MessageCard />
        </>
      );
    }
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />

        {this.props.messages.map((msg) => (
          <div className='message-list-wrapper'>
            <MessageCard
              className='message'
              id={msg.id}
              createdAt={msg.createdAt}
              key={msg.id}
              likes={msg.likes}
              text={msg.text}
              username={msg.username}
            />
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messageList.result,
    user: state.auth.login.result,
  };
};

const mapDispatchToProps = {
  messageList,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(userIsAuthenticated(MessageMenu));
