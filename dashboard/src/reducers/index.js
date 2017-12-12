import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductsReducer from './reducer_products';


const rootReducer = combineReducers({
  form: formReducer,
  products: ProductsReducer
});

export default rootReducer;
