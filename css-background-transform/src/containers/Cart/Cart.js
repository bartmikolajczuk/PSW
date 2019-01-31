import React, { Component } from "react";
import { connect } from "react-redux";
import {Button, ToggleButton,ToggleButtonGroup, ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import CartItem from "./../../components/CartItem/CartItem";
import { getCartItems } from "./../../store/selectors/cart";
import {removeFromCart} from "../../store/actions/cart";
import classes from "./Cart.css";
import { PropTypes } from "prop-types";

class Cart extends Component {

  renderCartItems = () => {
    const { cartItems, removeFromCart } = this.props;
    return cartItems.map(({ url, name, price, size, color }, index) => (
      <div>
      <CartItem
        key={index}
        id={name}
        imgUrl={url}
        name={name}
        price={price}
        size={size}
        color={color}
        onRemoveFromCart={removeFromCart}
      />
      </div>


    ));
  };

  render() {
    return (
      <div className={classes.border}>{this.renderCartItems()}</div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = store => ({
  cartItems: getCartItems(store)
});

const mapDispatchToProps = {
  removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
