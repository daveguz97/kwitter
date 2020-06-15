import React from "react";
import { connect } from "react-redux";
import { getImagePro } from "../../../redux";
import { Button } from "semantic-ui-react";
class ProfileUpdate extends React.Component {
  state = {
    picture: "",
  };
  handleUpdateSubmit = (event) => {
    event.preventDefault();
    this.props
      .getImagePro(event.target)
      .then((event) => window.location.reload());
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleUpdateSubmit}>
          <input
            type="file"
            name="picture"
            accept="image/png, image/jpeg, image/gif"
          ></input>
          <Button type="submit">Save Image</Button>
        </form>
      </>
    );
  }
}
export default connect(
  (state) => ({
    result: state.user.getImagePro.result,
    loading: state.user.getImagePro.loading,
    error: state.user.getImagePro.error,
  }),
  { getImagePro }
)(ProfileUpdate);
