import React from "react";
// import { Menu } from ".";
// import { userIsAuthenticated } from "../HOCs";
import {UpdateProfileSubmit} from "./";
import {connect} from "react-redux";
import {getUser} from "../../redux";
import {domain} from "../../redux/helpers";
import {Card ,Image , Header} from "semantic-ui-react";
import {ProfileSummary} from "."

class ProfilePage extends React.Component {
   state={
     username: "",
     displayName:"",
     about:"",
     pictureLocation:"",
     createdAt: "",
     updatedAt: "",
   }

componentDidMount=() =>{
  this.props.getUser()
  .then(val=>this.setState({
    username: val.payload.user.username,
    displayName:val.payload.user.displayName,
    about:val.payload.user.about,
    pictureLocation:val.payload.user.pictureLocation,
    createdAt: val.payload.user.createdAt,
    updatedAt: val.payload.user.updatedAt,
  })
  )
}
  render() {
    const CreateDate = new Date(this.state.createdAt)
    const UpdatedDate = new Date(this.state.updatedAt)
    return (
      <>
        {/* <Menu isAuthenticated={this.props.isAuthenticated} /> */}
        {/* <h2>Profile</h2> */}
        {/* <button onClick={UpdateProfile}>Update Profile</button> */}
        <div className="ProfileCard">
          <Card id="Card1">
              <Card.Header>{this.state.displayName}</Card.Header>
              <Card.Description>@{this.state.username}</Card.Description>
              <Card.Description>{this.state.about}</Card.Description>
              <Card.Description>
                <p>Joined Kwitter On:{CreateDate.toDateString()}</p>
                <p> Last Update On: {UpdatedDate.toDateString()}</p>
              </Card.Description>
        </Card>
    <Image id="avatar" src={domain + this.state.pictureLocation} size= "medium" ></Image>
    <div>
    <Header>
      Choose Profile Picture
    </Header>
    <UpdateProfileSubmit/>
    </div>
        </div>
      </>
    );
  }
}

export default connect(
  state=>({
    result: state.user.getUser.result,
    loading: state.user.getUser.loading,
    error: state.user.getUser.error
  }),
  {getUser})(ProfilePage);

