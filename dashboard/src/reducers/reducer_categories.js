import {
	FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, RESET_CATEGORIES,
	FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS,  FETCH_CATEGORY_FAILURE, RESET_ACTIVE_CATEGORY,
	EDIT_CATEGORY, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILURE, RESET_EDIT_CATEGORY,
	DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, RESET_DELETED_CATEGORY,
  VALIDATE_CATEGORY_FIELDS,VALIDATE_CATEGORY_FIELDS_SUCCESS, VALIDATE_CATEGORY_FIELDS_FAILURE, RESET_CATEGORY_FIELDS
} from '../actions/categories';


const INITIAL_STATE = {
	categoriesList: {categories: [], error:null, loading: false},
	editCategory:{category:null, error: null, loading: false},
	activeCategory:{category:null, error:null, loading: false},
	deletedCategory: {category: null, error:null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
  let error;

  switch(action.type) {

  case FETCH_CATEGORIES:// start fetching categories and set loading = true
  	return { ...state, categoriesList: {categories: [], error: null, loading: true} };
  case FETCH_CATEGORIES_SUCCESS:// return list of categories and make loading = false
    return { ...state, categoriesList: {categories: action.payload, error:null, loading: false} };
  case FETCH_CATEGORIES_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, categoriesList: {categories: [], error: error, loading: false} };
  case RESET_CATEGORIES:// reset categoriesList to initial state
    return { ...state, categoriesList: {categories: [], error:null, loading: false} };

  case FETCH_CATEGORY:
    return { ...state, activeCategory:{...state.activeCategory, loading: true}};
  case FETCH_CATEGORY_SUCCESS:
    return { ...state, activeCategory: {category: action.payload, error:null, loading: false}};
  case FETCH_CATEGORY_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, activeCategory: {category: null, error:error, loading:false}};
  case RESET_ACTIVE_CATEGORY:
    return { ...state, activeCategory: {category: null, error:null, loading: false}};

	case EDIT_CATEGORY:
		return {...state, editCategory: {...state.editCategory, loading: true}}
	case EDIT_CATEGORY_SUCCESS:
		return {...state, editCategory: {category:action.payload, error:null, loading: false}}
	case EDIT_CATEGORY_FAILURE:
		error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
		return {...state, editCategory: {category:null, error:error, loading: false}}
	case RESET_EDIT_CATEGORY:
		return {...state,  editCategory:{category:null, error:null, loading: false}}

  case DELETE_CATEGORY:
   	return {...state, deletedCategory: {...state.deletedCategory, loading: true}}
  case DELETE_CATEGORY_SUCCESS:
  	return {...state, deletedCategory: {category:action.payload, error:null, loading: false}}
  case DELETE_CATEGORY_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, deletedCategory: {category:null, error:error, loading: false}}
  case RESET_DELETED_CATEGORY:
  	return {...state,  deletedCategory:{category:null, error:null, loading: false}}

  case VALIDATE_CATEGORY_FIELDS:
    return {...state, editCategory:{...state.editCategory, error: null, loading: true}}
  case VALIDATE_CATEGORY_FIELDS_SUCCESS:
    return {...state, editCategory:{...state.editCategory, error: null, loading: false}}
  case VALIDATE_CATEGORY_FIELDS_FAILURE:
    let result = action.payload;
    if(!result) {
      error = {message: action.payload.message};
    } else {
      error = {title: result.title};
    }
    return {...state, editCategory:{...state.editCategory, error: error, loading: false}}
  case RESET_CATEGORY_FIELDS:
    return {...state, editCategory:{...state.editCategory, error: null, loading: null}}
  default:
    return state;
  }
}
