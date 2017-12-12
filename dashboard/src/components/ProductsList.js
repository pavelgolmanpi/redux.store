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
        <li className="list-group-item" key={product.id}>
          <Link style={{color:'black'}} to={"products/" + product.id}>
            <h3 className="list-group-item-heading">{product.title}</h3>
          </Link>

        </li>
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
        <ul className="list-group">
          {this.renderProducts(products.rows)}
        </ul>

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
