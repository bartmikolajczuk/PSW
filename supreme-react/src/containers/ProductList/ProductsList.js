import PropTypes from "prop-types";
import React, { Component } from "react";
import {Col} from "react-bootstrap"
import classes from "./ProductsList.css";
import Product from "./../../components/Product/Product";
import { connect } from "react-redux";
import { getProductsList } from "./../../store/selectors/products";
import { fetchProducts } from "./../../store/actions/products";
import { addToCart } from "./../../store/actions/cart";

class ProductsList extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  renderProducts = () => {
    const { products, addToCart } = this.props;
    return products.map(({ name, url, price, sizeArray, colorsArray }) => (
        <Col xs={6} sm={4} md={3}>
          <Product
                key={name}
                id={name}
                imgUrl={url}
                name={name}
                price={price}
                sizes={sizeArray}
                colors={colorsArray}
                addToCart={addToCart}
                >
            </Product>
        </Col>
    ));
  };

  render() {
    return (
      <div className={classes.products}>
      <div className="container ">{this.renderProducts()}</div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = store => ({
  products: getProductsList(store)
});

const mapDispatchToProps = {
  fetchProducts,
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
