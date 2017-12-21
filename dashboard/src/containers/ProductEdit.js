import ProductEdit from '../components/ProductEdit.js';
import { fetchProduct, fetchProductSuccess, fetchProductFailure, resetActiveProduct, resetDeletedProduct } from '../actions/products';
import { connect } from 'react-redux';

function mapStateToProps(globalState, ownProps) {
  const product = globalState.products.editProduct.product ? globalState.products.editProduct.product : globalState.products.activeProduct;

  return {
    product: product,
    productId: ownProps.id,
    initialValues: product.product
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => {
      dispatch(fetchProduct(id))
        .then((result) => {
          if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(fetchProductFailure(result.payload.response.data));
          } else {
            dispatch(fetchProductSuccess(result.payload.data))
          }
        })
    },
    resetMe: () => {
      dispatch(resetActiveProduct());
      dispatch(resetDeletedProduct());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
