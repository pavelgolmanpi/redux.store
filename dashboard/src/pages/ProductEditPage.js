import React, { Component } from 'react';
import LeftSidebar  from '../components/LeftSidebar';
import ProductEdit from '../containers/ProductEdit';

class ProductEditPage extends Component {


  render() {
    return (
      <div>
        <LeftSidebar />
        <div class="right_col" role="main" style={{minHeight: '1162px'}}>
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>Tables <small>Some examples to get you started</small></h3>
              </div>
            </div>

            <div class="clearfix"></div>

            <ProductEdit id={this.props.match.params.id} />
          </div>
        </div>
      </div>
    );
  }
}


export default ProductEditPage;
