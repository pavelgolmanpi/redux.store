import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductsReducer from './reducer_products';
import CategoriesReducer from './reducer_categories';


const rootReducer = combineReducers({
  form: formReducer,
  products: ProductsReducer,
  categories: CategoriesReducer
});

export default rootReducer;
