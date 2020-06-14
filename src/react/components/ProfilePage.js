import React from "react";
import { connect } from "react-redux";
import { ProfileSubmit, DeleteUser } from ".";
import { getUser } from "../../redux";
import { domain } from "../../redux/helpers";
import { Button, Card, Image, Modal, Header } from "semantic-ui-react";
import { ProfileUpdate } from ".";
import "./ProfilePage.scss";
// import './ProfilePage.css';
class ProfilePage extends React.Component {
  state = {
    pictureLocation: "",
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
  };
  componentDidMount = () => {
    this.props.getUser().then((val) =>
      this.setState({
        pictureLocation: val.payload.user.pictureLocation,
        username: val.payload.user.username,
        displayName: val.payload.user.displayName,
        about: val.payload.user.about,
        createdAt: val.payload.user.createdAt,
        updatedAt: val.payload.user.updatedAt,
      })
    );
  };
  render() {
    const createKwitterDate = new Date(this.state.createdAt);
    const updateKwitterDate = new Date(this.state.updatedAt);
    return (
      <>
        <div className="wrapper">
          <Card id="card">
            <Card.Content>
              <Image id="avatar" src={domain + this.state.pictureLocation} />
              <Card.Header>
                <h2>{this.state.displayName}</h2>
              </Card.Header>
              <Card.Meta>
                <span className="date-update">@{this.state.username}</span>
              </Card.Meta>
              <Card.Description>{this.state.about}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p> Joined Kwitter on: {createKwitterDate.toDateString()}</p>
              <p> Last Updated on: {updateKwitterDate.toDateString()} </p>
              <Modal
                trigger={
                  <Button className="edit-profile">Update Account</Button>
                }
              >
                <Modal.Header>Update Account Profile</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Header>Update Account Information</Header>
                    <ProfileSubmit />
                    <DeleteUser />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Modal
                trigger={
                  <Button className="update-account">Update Image</Button>
                }
              >
                <Modal.Header>Update Profile Image</Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src={domain + this.state.pictureLocation}
                  />
                  <Modal.Description>
                    <Header>Upload Account Image</Header>
                    <ProfileUpdate />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
        </div>
      </>
    );
  }
}
export default connect(
  (state) => ({
    result: state.user.getUser.result,
    loading: state.user.getUser.loading,
    error: state.user.getUser.error,
  }),
  { getUser }
)(ProfilePage);
