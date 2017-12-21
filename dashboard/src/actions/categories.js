import axios from 'axios';

//Categories list
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';

//Edit category
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const EDIT_CATEGORY_SUCCESS = 'EDIT_CATEGORY_SUCCESS';
export const EDIT_CATEGORY_FAILURE = 'EDIT_CATEGORY_FAILURE';
export const RESET_EDIT_CATEGORY = 'RESET_EDIT_CATEGORY';

//Validate category fields like Title
export const VALIDATE_CATEGORY_FIELDS = 'VALIDATE_CATEGORY_FIELDS';
export const VALIDATE_CATEGORY_FIELDS_SUCCESS = 'VALIDATE_CATEGORY_FIELDS_SUCCESS';
export const VALIDATE_CATEGORY_FIELDS_FAILURE = 'VALIDATE_CATEGORY_FIELDS_FAILURE';
export const RESET_CATEGORY_FIELDS = 'RESET_CATEGORY_FIELDS';

//Fetch categories
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';
export const RESET_ACTIVE_CATEGORY = 'RESET_ACTIVE_CATEGORY';

//Delete category
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';
export const RESET_DELETED_CATEGORY = 'RESET_DELETED_CATEGORY';


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function fetchCategories() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/categories`,
    headers: []
  });

  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
}

export function fetchCategoriesFailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
}

export function validateCategoryFields(props) {
  //note: we cant have /categories/validateFields because it'll match /categories/:id path!
  const request = axios.post(`${ROOT_URL}/categories/validate/fields`, props);

  return {
    type: VALIDATE_CATEGORY_FIELDS,
    payload: request
  };
}

export function validateCategoriesFieldsSuccess() {
  return {
    type: VALIDATE_CATEGORY_FIELDS_SUCCESS
  };
}

export function validateCategoriesFieldsFailure(error) {
  return {
    type: VALIDATE_CATEGORY_FIELDS_FAILURE,
    payload: error
  };
}

export function resetCategoryFields() {
  return {
    type: RESET_CATEGORY_FIELDS
  }
}
;


export function editCategory(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/categories`,
    //headers: {
    //  'Authorization': `Bearer ${tokenFromStorage}`
    //}
  });

  return {
    type: EDIT_CATEGORY,
    payload: request
  };
}

export function editCategorySuccess(category) {
  return {
    type: EDIT_CATEGORY_SUCCESS,
    payload: category
  };
}

export function editCategoryFailure(error) {
  return {
    type: EDIT_CATEGORY_FAILURE,
    payload: error
  };
}

export function resetEditCategory() {
  return {
    type: RESET_EDIT_CATEGORY
  }
}
;

export function fetchCategory(id) {
  const request = axios.get(`${ROOT_URL}/categories/${id}`);

  return {
    type: FETCH_CATEGORY,
    payload: request
  };
}


export function fetchCategorySuccess(activeCategory) {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: activeCategory
  };
}

export function fetchCategoryFailure(error) {
  return {
    type: FETCH_CATEGORY_FAILURE,
    payload: error
  };
}

export function resetActiveCategory() {
  return {
    type: RESET_ACTIVE_CATEGORY
  }
}


export function deleteCategory(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/categories/${id}`,
    //headers: {
    //  'Authorization': `Bearer ${tokenFromStorage}`
    //}
  });
  return {
    type: DELETE_CATEGORY,
    payload: request
  };
}

export function deleteCategorySuccess(deletedCategory) {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    payload: deletedCategory
  };
}

export function deleteCategoryFailure(response) {
  return {
    type: DELETE_CATEGORY_FAILURE,
    payload: response
  };
}


export function resetDeletedCategory() {
  return {
    type: RESET_DELETED_CATEGORY
  }
}
;
