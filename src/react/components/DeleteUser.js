import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { deleteUsario } from '../../redux';

class DeleteUser extends React.Component {
  handleDeleteUser = (event) => {
    event.preventDefault();
    const confirm = window.confirm('Do you want to delete this account?');
    if (confirm) {
      this.props.deleteUsario(this.props.id);
    }
  };

  render() {
    return (
      <>
        <Button
          outline
          theme='danger'
          size='sm'
          onClick={this.handleDeleteUser}
        >
          Delete Account
        </Button>
      </>
    );
  }
}

export default connect(null, { deleteUsario })(DeleteUser);
