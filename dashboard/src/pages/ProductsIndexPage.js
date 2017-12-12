import React, { Component } from 'react';
import LeftSidebar  from '../components/LeftSidebar';
import ProductsIndex from '../containers/ProductsIndex';

class ProductsIndexPage extends Component {
  render() {
    return (
      <div>
        <LeftSidebar />
        <ProductsIndex />
      </div>
    );
  }
}


export default ProductsIndexPage;
