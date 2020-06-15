import React from "react";
import { RegistrationForm, Menu } from "./components/index";
class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu></Menu>
        <RegistrationForm />
      </React.Fragment>
    );
  }
}

export default Register;
