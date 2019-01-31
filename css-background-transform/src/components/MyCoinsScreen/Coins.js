import React, { Component } from "react";
import {Button} from "react-bootstrap"
import { Form, Field } from 'react-final-form'
import classes from './Coins.css';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class Coins extends Component {


  render () {
    return (
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, form, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit}>
            <div class={classes.coinsLabel}>Coins</div>
            <div>
              <label class={classes.yourCoinsLabel}>Balance</label>
              <label class={classes.yourCoins}>x</label>

            </div>
            <div>
              <label class={classes.buyNew}>Buy new</label>
              <Field
                name="coins"
                component="input"
                type="text"
                placeholder="Coins"
              />
            </div>
            <div className="buttons">
              <Button
                className={classes.action__button}
                type="submit"
                disabled={submitting || pristine}>
                Buy
              </Button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
        )
      }
    }
    export default Coins;

