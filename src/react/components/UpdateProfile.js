import React from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {profileSummary} from '../../redux';

class UpdateProfile extends React.Component {
    state = { password: "", about: "", displayName: "" };
  
    handleUpdate = e => {
      e.preventDefault();
      this.props.profileSummary(this.state)
      .then((e)=> window.location.reload());
      
    };
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render()
     {
   
      return (
        <React.Fragment>
          <Form id="UpdateProfile-form" onSubmit={this.handleUpdate}>
            <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            accept="text"
            onChange={this.handleChange}
          />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              accept="text"
              onChange={this.handleChange}
            />
            <label htmlFor="about">About</label>
            <input
              type="text"
              name="about"
              accept="text"
              onChange={this.handleChange}
            />
            <Button type="submit">
              Save Profile
            </Button>
          </Form>
          
        </React.Fragment>
      );
    }
  }
  
  export default connect(
    state=>({
      result: state.user.profileSummary.result,
      loading: state.user.profileSummary.loading,
      error: state.user.profileSummary.error
    }),
    {profileSummary})(UpdateProfile);