import React, { Component } from "react";
import { CommercialRegister, Details } from "./components/commercial";

export default class Register extends Component {
  state = {
    step: 1,
    email: "",
    password: "",
    companyname: "",
    companydescription: "",
    companyphone: "",
    companywebsite: "",
  };

  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  //proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, password } = this.state;

    const values = {
      email,
      password,
    };

    switch (step) {
      case 1:
        return (
          <CommercialRegister
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Details
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      default:
      //do nothing
    }
  }
}
