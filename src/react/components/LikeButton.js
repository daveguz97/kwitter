import React, { Component } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { like } from '../../redux';
import { connect } from 'react-redux';

class LikeButton extends React.Component {
  // componentDidMount() {
  //   this.props.like();
  // }

  handleLikeButton = (event) => {
    this.props.like(this.props.messageId);

    // event.preventDefault();
    // // is there a like?
    // for (let i = 0; i < this.props.likes.length; i++) {
    //   if (this.props.likes[i].username === this.props.username) {
    //     // delete a like
    //     this.props.deleteLike(this.props.likes[i].id);
    //     .then((event) => window.location.reload());
    //     return;
    //   }
    // }
    // // add a like
    // this.props.like({ messageId: this.props.id });
    // .then((event) => window.location.reload());
  };

  render() {
    const isLiked = this.props.likes.find(
      (like) => like.username === this.props.loggedInUsername
    );

    return (
      <Button as='div' labelPosition='right' onClick={this.handleLikeButton}>
        <Button icon>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic pointing='left'>
          {this.props.likes.length}
          {isLiked ? 'Unlike' : 'Like'}
        </Label>
      </Button>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedInUsername: state.auth.login.result.username,
  };
};
const mapDispatchToProps = {
  like,
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);

// export default connect(
//   (state) => ({
//     username: state.auth.login.result.username,
//   }),
//   { like, deleteLike }
// )(LikeButton);
