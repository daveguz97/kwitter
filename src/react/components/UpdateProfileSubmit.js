import React from "react";
import getImageProfile from "../../redux";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";

class UpdateProfileSubmit extends React.Component {
    state = { Picture:"",};
  
      handleUpdate = e => {
        e.preventDefault();
        this.props.getImageProfile(e.target)
        .then((e)=> window.location.reload());
      }
        render() {
         return (
           <React.Fragment>
             <Form id="UpdateProfile-image" onSubmit={this.handleUpdate}>
            
             <input
               type="file"
               name="picture"
               accept="image/jpeg, image/png, image/gif"
               ></input>
               <Button type="submit">
                 Save Profile
                </Button>
             </Form>
           </React.Fragment>
         )
        }
    }
    export default connect(
        state=>({
          result: state.user.getImageProfile.result,
          loading: state.user.getImageProfile.loading,
          error: state.user.getImageProfile.error
        }),
        {getImageProfile})(UpdateProfileSubmit);