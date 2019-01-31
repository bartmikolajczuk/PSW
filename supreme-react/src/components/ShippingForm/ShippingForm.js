import PropTypes from "prop-types";
import countries from './CountryOption';
import {Button} from "react-bootstrap"
import classes from './ShippingForm.css';
import { Form, Field } from 'react-final-form'
import React, { Component } from "react";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class ShippingForm extends Component {
  constructor (props) {
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
    })
  }

  render () {
    countries.map((item) => (
      console.log(item)
    ))
    return (
      <div className={classes.shippingForm} >
      <Form
        onSubmit={onSubmit}
        initialValues={{country: 'GB'}}
        render={({handleSubmit, form, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit}>
            <div class={classes.shippingLabel}>Shipping Info</div>
            <div>
              <label>Full Name</label>
              <Field
                name="name"
                    component="input"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label>E-mail</label>
                  <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label>Phone Number</label>
                  <Field name="phoneNumber" component="input" type="text" placeholder="Phone Number"/>
                </div>
                <div>
                  <label>Adress 1</label>
                  <Field name="adress1" component="input" type="text" placeholder="Adress 1"/>
                </div>
                <div>
                  <label>Adress 2</label>
                  <Field name="adress2" component="input" type="text" placeholder="Adress 2"/>
                </div>
                <div>
                  <label>Adress 3</label>
                  <Field name="adress3" component="input" type="text" placeholder="Adress 3"/>
                </div>
                <div>
                  <label>City</label>
                  <Field name="city" component="input" type="text" placeholder="City"/>
                </div>
                <div>
                  <label>Zipcode</label>
                  <Field name="zipcode" component="input" type="text" placeholder="Zipcode"/>
                </div>
                <div>
                  <label>Country</label>
                  <Field name="country" component="select" className={classes.countrySelect}>
                    {countries.map((item) => (
                      <option value={item.value}>{item.descr}</option>
                    ))}
                  </Field>
                </div>
                <div className="buttons">
                  <Button
                    className={classes.action__button}
                    type="submit"
                    disabled={submitting || pristine}>
                    Submit
                  </Button>
                  <Button
                    className={classes.action__button}
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
        <div className={classes.nested}>
          <div>
            <p value="para">Paragraph 1 in the div.</p>
            <p>Paragraph 2 in the div.</p>
            <span><p>Paragraph 3 in the div.</p></span>
          </div>
          <p>Paragraph 4. Not in a div.</p>
          <p>Paragraph 5. Not in a div.</p>
        </div>

        <div className={classes.nested2}>
          <div>
            <p value="para">Paragraph 1 in the div.</p>
            <p>Paragraph 2 in the div.</p>
            <span><p>Paragraph 3 in the div.</p></span>
          </div>
          <p>Paragraph 4. Not in a div.</p>
          <p>Paragraph 5. Not in a div.</p>
        </div>
        <div className={classes.moving}></div>
        <div className={classes.transforming}></div>

      </div>


    )
  }
}
export default ShippingForm;

