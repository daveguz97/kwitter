import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import { createMessage } from '../../redux';
// import './CreateMessageForm.css';
import Spinner from 'react-spinkit';

class AddMessageCard extends Component {
  state = {
    text: '',
  };

  handleCreate = (event) => {
    event.preventDefault();
    this.props
      .createMessage(this.state)
      .then((event) => window.location.reload());
    this.setState({ text: '' });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div id='new-message'>
        <form onSubmit={this.handleCreate}>
          <Input
            id='message-input'
            type='text'
            name='text'
            autoFocus
            required
            placeholder='Enter message'
            onChange={this.handleChange}
          ></Input>
          <Button id='post-button' type='submit' disabled={loading}>
            Post your Message
          </Button>
        </form>
        {loading && <Spinner name='circle' color='blue' />}
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    result: state.messages.createMessage.result,
    loading: state.messages.createMessage.loading,
    error: state.messages.createMessage.error,
  }),
  { createMessage }
)(AddMessageCard);
