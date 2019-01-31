import React, { Component } from 'react';

import Cart from '../../containers/Cart/Cart'
import ProductsList from '../../containers/ProductList/ProductsList'

class ProductsScreen extends Component {
  render () {
    return (
      <React.Fragment>
        <Cart/>
        <ProductsList/>
      </React.Fragment>
    );
  }
}

export default ProductsScreen;