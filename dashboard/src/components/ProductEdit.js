import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import renderField from './renderField';
//import renderTextArea from './renderTextArea';
import { validateProductFields, validateProductFieldsSuccess, validateProductFieldsFailure } from '../actions/products';
import { createProduct, createProductSuccess, createProductFailure, resetNewPrduct } from '../actions/products';

//Client side validation
function validate(values) {
  const errors = {};

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Enter a Title';
  }
console.log(errors);
  return errors;
}

//For instant async server validation
const asyncValidate = (values, dispatch) => {
  return dispatch(validateProductFields(values))
    .then((result) => {
      //Note: Error's "data" is in result.payload.response.data
      // success's "data" is in result.payload.data
      if (!result.payload.response) { //1st onblur
        return;
      }

      let {data, status} = result.payload.response;
      //if status is not 200 or any one of the fields exist, then there is a field error
      if (response.payload.status != 200 || data.title || data.categories || data.description) {
        //let other components know of error by updating the redux` state
        dispatch(validateProductFieldsFailure(data));
        throw data; //throw error
      } else {
        //let other components know that everything is fine by updating the redux` state
        dispatch(validateProductFieldsSuccess(data));
      }
    });
};

//For any field errors upon submission (i.e. not instant check)
const validateAndCreateProduct = (values, dispatch) => {
  return dispatch(createProduct(values))
    .then(result => {
      // Note: Error's "data" is in result.payload.response.data (inside "response")
      // success's "data" is in result.payload.data
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(createProductFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response.data);
      }
      //let other components know that everything is fine by updating the redux` state
      dispatch(createProductSuccess(result.payload.data));
    });
}



class ProductForm extends Component {

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    this.props.resetMe();

    this.props.fetchProduct(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    //if (nextProps.editProduct.product && !nextProps.editProduct.error) {
    //  this.context.router.push('/');
    //}
  }

  render() {
    const {handleSubmit, submitting, product} = this.props;

    return (
      <div className='container'>
        <form onSubmit={ handleSubmit(validateAndCreateProduct) } class="form-horizontal form-label-left" >
        <Field
               name="title"
               type="text"
               component={ renderField }
               label="Title*" />

         <div class="ln_solid"></div>

         <div class="form-group">
           <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
             <button class="btn btn-primary" type="button">Cancel</button>

             <button type="submit" class="btn btn-success" disabled={ submitting } >Submit</button>
           </div>
         </div>

        </form>
      </div>
    )
  }
}


export default reduxForm({
  form: 'ProductForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  asyncValidate,
  enableReinitialize: true
})(ProductForm)
