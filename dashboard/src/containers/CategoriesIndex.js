import { connect } from 'react-redux'
import { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions/categories';
import CategoriesList from '../components/CategoriesList';


const mapStateToProps = (state) => {
  console.log(state);
  return {
    categoriesList: state.categories.categoriesList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories()).then((response) => {
            !response.error ? dispatch(fetchCategoriesSuccess(response.payload.data)) : dispatch(fetchCategoriesFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
