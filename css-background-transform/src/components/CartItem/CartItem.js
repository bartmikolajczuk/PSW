import PropTypes from "prop-types";
import React from "react";
import classes from "./CartItem.css";
import { Button } from "react-bootstrap"

const CartItem = ({ imgUrl, name, price, size, color, onRemoveFromCart }) => (
  <div className="container">
    <div className={classes.cartItem}>
      <div className={classes.imgUrl}>
        <img src={imgUrl} />
      </div>
      <div className={classes.name}>{name}</div>
      <div className={classes.price}>{
        price &&
        price!=undefined ? (price) : ( <div>unknown</div> )
      }</div>
      <div className={classes.size}>{
        size &&
          size.length >= 1 ? (size) : ( <div>one size</div> )
      }</div>
      <div className={classes.color}>{
        color &&
        color.length >= 1 ? (size) : ( <div>-</div> )
      }</div>
      <Button className={classes.removeButton} bsSize="small" onClick={() => onRemoveFromCart(name)}>Remove</Button>
    </div>
  </div>
);

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    onRemoveFromCart: PropTypes.func.isRequired
};

export default CartItem;
