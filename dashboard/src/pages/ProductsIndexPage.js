import React, { Component } from 'react';
import LeftSidebar  from '../components/LeftSidebar';
import ProductsIndex from '../containers/ProductsIndex';

class ProductsIndexPage extends Component {
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

              <div class="row">



                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="x_panel">
                    <div class="x_title">
                      <h2>Table design <small>Custom design</small></h2>
                      <ul class="nav navbar-right panel_toolbox">
                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </li>
                        <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Settings 1</a>
                            </li>
                            <li><a href="#">Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a>
                        </li>
                      </ul>
                      <div class="clearfix"></div>
                    </div>

                    <div class="x_content">


                      <div class="table-responsive">
                        <ProductsIndex />
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>





    );
  }
}


export default ProductsIndexPage;
