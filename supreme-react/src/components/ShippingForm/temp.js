

import PropTypes from "prop-types";
import SingleInput from './SingleInput';
import Select from './Select';
import countries from './CountryOption';

import CountrySelect from './Select';
import React, { Component } from "react";

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      address3: '',
      city: '',
      zipcode: '',
      country: ''
    });
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      address1: this.state.address1,
      address2: this.state.address2,
      address3: this.state.address3,
      city: this.state.city,
      zipcode: this.state.zipcode,
      country: this.state.country
    };

    console.log('Send this in a POST request:', formPayload)
    //this.handleClearForm(e);
  }
  handleFormChange(e) {
    this.setState({ [e.target.name] : e.target.value })
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      address3: '',
      city: '',
      zipcode: '',
      country: ''
    });
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Pet Adoption Form</h5>
        <SingleInput
          inputType={'text'}
          title={'name'}
          name={'name'}
          controlFunc={this.handleFormChange}
          content={this.state.name}
          placeholder={'Type name here'} />
        <SingleInput
          inputType={'text'}
          title={'email'}
          name={'email'}
          controlFunc={this.handleFormChange}
          content={this.state.email}
          placeholder={'Type email here'} />
        <SingleInput
          inputType={'number'}
          title={'phoneNumber'}
          name={'phoneNumber'}
          controlFunc={this.handleFormChange}
          content={this.state.phoneNumber}
          placeholder={'Type phone number here'} />
        <SingleInput
          inputType={'text'}
          title={'address1'}
          name={'address1'}
          controlFunc={this.handleFormChange}
          content={this.state.address1}
          placeholder={'Type address1 here'} />
        <SingleInput
          inputType={'text'}
          title={'address2'}
          name={'address2'}
          controlFunc={this.handleFormChange}
          content={this.state.address2}
          placeholder={'Type address2 here'} />
        <SingleInput
          inputType={'text'}
          title={'address3'}
          name={'address3'}
          controlFunc={this.handleFormChange}
          content={this.state.address3}
          placeholder={'Type address3 here'} />
        <SingleInput
          inputType={'text'}
          title={'city'}
          name={'city'}
          controlFunc={this.handleFormChange}
          content={this.state.city}
          placeholder={'Type city here'} />
        <SingleInput
          inputType={'text'}
          title={'zipcode'}
          name={'zipcode'}
          controlFunc={this.handleFormChange}
          content={this.state.zipcode}
          placeholder={'Type zipcode here'} />
        <Select
          name={'country'}
          placeholder={'Choose your country'}
          controlFunc={this.handleFormChange()}
          options={countries}
          selectedOption={this.state.country} />


        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"/>
        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}>Clear form</button>
      </form>

    );
  }
}

export default ShippingForm;