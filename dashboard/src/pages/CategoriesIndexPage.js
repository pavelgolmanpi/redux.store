import React, { Component } from 'react';
import LeftSidebar  from '../components/LeftSidebar';
import CategoriesIndex from '../containers/CategoriesIndex';

class CategoriesIndexPage extends Component {
  render() {
    return (
      <div>
        <LeftSidebar />
        <div class="right_col" role="main" style={{minHeight: '1162px'}}>
          <div class="">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Категории</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <div class="table-responsive">
                      <CategoriesIndex />
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


export default CategoriesIndexPage;
