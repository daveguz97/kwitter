import React from "react";
import { connect } from "react-redux";
import { getProfileSum } from "../../../redux";
import { Button, Form } from "semantic-ui-react";
class ProfileSubmit extends React.Component {
  state = {
    displayName: "",
    password: "",
    about: "",
  };
  handleSubmitProfile = (event) => {
    event.preventDefault();
    this.props
      .getProfileSum(this.state)
      .then((event) => window.location.reload());
  };
  handleUpdate = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <>
        <Form id="edit-form" onSubmit={this.handleSubmitProfile}>
          <Form.Field>
            <label>Display Name</label>
            <input
              type="text"
              name="displayName"
              accept="text"
              onChange={this.handleUpdate}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="text"
              name="password"
              accept="text"
              onChange={this.handleUpdate}
            ></input>
          </Form.Field>
          <Form.Field>
            <label>About</label>
            <input
              type="text"
              name="about"
              accept="text"
              onChange={this.handleUpdate}
            ></input>
          </Form.Field>
          <Button type="submit">Save Changes</Button>
        </Form>
      </>
    );
  }
}
export default connect(
  (state) => ({
    result: state.user.getProfileSum.result,
    loading: state.user.getProfileSum.loading,
    error: state.user.getProfileSum.error,
  }),
  { getProfileSum }
)(ProfileSubmit);
