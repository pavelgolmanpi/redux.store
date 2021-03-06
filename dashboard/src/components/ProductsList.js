import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

class ProductsList extends Component {
  constructor(props) {
      super(props);

      this.state = {
        offset: 0,
        perPage: 20
      }
    }

  componentWillMount() {
    this.props.fetchProducts(this.state.offset, this.state.perPage);
  }

  renderProducts(products) {
    return products.map((product) => {
      return (
        <tr class="even pointer" key={product.id}>
          <td class="a-center ">
            <div class="icheckbox_flat-green" style={{position: 'relative'}}>
              <input type="checkbox" class="flat" name="table_records" style={{position: 'absolute', opacity: 0}} />
              <ins class="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: '0px', padding: '0px', background: 'rgb(255, 255, 255)',  border: '0px', opacity: 0}}></ins></div>
          </td>
          <td class=" ">{product.id}</td>
          <td class=" ">
            <Link style={{color:'black'}} to={"products/" + product.id}>
              {product.title}
            </Link>
          </td>
          <td class="a-right a-right ">$7.45</td>
          <td class=" last"><a href="#">View</a>
          </td>
        </tr>
      );
    });
  }

  handlePageClick (data) {
    let offset = Math.ceil(data.selected * this.state.perPage);

    this.setState({offset: offset}, () => {
      this.props.fetchProducts(this.state.offset, this.state.perPage);
    });
  };

  render() {
    const { products, loading, error } = this.props.productsList;

    if(loading) {
      return <div className="container"><h1>Product</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    const pageCount = Math.ceil(products.count / this.state.perPage);
    const currentPage = this.state.offset / this.state.perPage ;

    return (
      <div className="container">
        <h1>Products</h1>
        <table class="table table-striped jambo_table bulk_action">
          <thead>
            <tr class="headings">
              <th>
                <div class="icheckbox_flat-green" style={{position: 'relative'}}>
                    <input type="checkbox" id="check-all" class="flat" style={{position: 'absolute', opacity: 0}} />
                    <ins class="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: '0px', padding: '0px', background: 'rgb(255, 255, 255)',  border: '0px', opacity: 0}}></ins>
                  </div>
              </th>
              <th class="column-title" style={{display: 'table-cell'}}>ID </th>
              <th class="column-title" style={{display: 'table-cell'}}>Title</th>
              <th class="column-title" style={{display: 'table-cell'}}>Amount </th>
              <th class="column-title no-link last" style={{display: 'table-cell'}}><span class="nobr">Action</span>
              </th>
              <th class="bulk-actions" colSpan="7" style={{display: 'none'}}>
                <a class="antoo" style={{color: '#fff', fontWeight: 500}}>Bulk Actions ( <span class="action-cnt">1 Records Selected</span> ) <i class="fa fa-chevron-down"></i></a>
              </th>
            </tr>
          </thead>

          <tbody>
            {this.renderProducts(products.rows)}
          </tbody>
        </table>

        <ReactPaginate previousLabel={"previous"}
                         nextLabel={"next"}
                         breakLabel={<a href="">...</a>}
                         breakClassName={"break-me"}
                         forcePage={currentPage}
                         pageCount={pageCount}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         onPageChange={this.handlePageClick.bind(this)}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"} />
      </div>


    );
  }
}


export default ProductsList;
