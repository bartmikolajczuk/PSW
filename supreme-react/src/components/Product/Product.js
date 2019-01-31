import PropTypes from "prop-types";
import React, { Component } from "react";
import classes from "./Product.css";
import { Button } from "react-bootstrap";
import Select from "./Select/Select";

class Product extends Component {
  constructor(props) {
    super(props);
    const { sizes, colors } = props;
    this.state = {
      selectedSize: sizes && sizes.length >= 1 ? sizes[0] : null,
      selectedColor: colors && colors.length >= 1 ? colors[0] : null
    };
  }

  onSizeChanged = e => this.setState({ selectedSize: e.target.value });

  onColorChanged = e => this.setState({ selectedColor: e.target.value });

  onAddToCart = () => {
    const { addToCart, name, price } = this.props;
    const { selectedSize, selectedColor } = this.state;
    const newItem = {
      id: name,
      price: price,
      size: selectedSize,
      colors: selectedColor
    };
    addToCart(newItem);
  };

  render() {
    const { imgUrl, name, price, sizes, colors } = this.props;
    const { selectedSize, selectedColor } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.product}>
          <div className={classes.product__info}>
            <img className={classes.product__image} src={imgUrl} alt={name} sizes='240px'/>
            <div className={classes.product__title}>{name}</div>
            <div className={classes.product__price}>{price}</div>
            <div className={classes.product__select}>
            {sizes &&
              sizes.length >= 1 ? (
                <Select
                  options={sizes}
                  selectedValue={selectedSize}
                  onChange={this.onSizeChanged}
                />
              ) : (
              <div>one size</div>
            )
            }
            {colors &&
              colors.length >= 1 && (
                <Select
                  options={colors}
                  selectedValue={selectedColor}
                  onChange={this.onColorChanged}
                />
              )}
            </div>
            <Button className={classes.action__button} onClick={this.onAddToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
  addToCart: PropTypes.func.isRequired
};

export default Product;
