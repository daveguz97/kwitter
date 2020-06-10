import React from 'react';
import { RegistrationForm, Menu } from '.';

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu></Menu>
        <RegistrationForm></RegistrationForm>
      </React.Fragment>
    );
  }
}

export default Register;
