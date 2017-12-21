import React, { Component, PropTypes } from 'react';


const renderField = (props) => {
  const error = props.meta.touched && props.meta.error ? props.meta.error : null;

  return (
  <div class="form-group">
    <label class="control-label col-md-3 col-sm-3 col-xs-12">
      {props.label}
    </label>
    <div class="col-md-6 col-sm-6 col-xs-12">
      <input {...props.input}  placeholder={props.label} class={"form-control col-md-7 col-xs-12 " + (error ? "parsley-error" : "")} />
        {error &&
              <ul class="parsley-errors-list filled">
                <li class="parsley-required">{error}</li>
              </ul>
        }
    </div>
  </div>
)}

export default renderField;
