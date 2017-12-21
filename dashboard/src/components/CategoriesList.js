import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

class CategoriesList extends Component {


  componentWillMount() {
    this.props.fetchCategories();
  }

  renderCategories(categories) {
    return categories.map((category) => {
      return (
        <tr class="even pointer" key={category.id}>
          <td class="a-center ">
            <div class="icheckbox_flat-green" style={{position: 'relative'}}>
              <input type="checkbox" class="flat" name="table_records" style={{position: 'absolute', opacity: 0}} />
              <ins class="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: '0px', padding: '0px', background: 'rgb(255, 255, 255)',  border: '0px', opacity: 0}}></ins></div>
          </td>
          <td class=" ">{category.id}</td>
          <td class=" ">
            <Link style={{color:'black'}} to={"categories/" + category.id}>
              {category.title}
            </Link>
          </td>
          <td class=" last"><a href="#">View</a>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { categories, loading, error } = this.props.categoriesList;

    if(loading) {
      return <div className="container"><h1>Categories</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
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
              <th class="column-title no-link last" style={{display: 'table-cell'}}><span class="nobr">Action</span>
              </th>
              <th class="bulk-actions" colSpan="7" style={{display: 'none'}}>
                <a class="antoo" style={{color: '#fff', fontWeight: 500}}>Bulk Actions ( <span class="action-cnt">1 Records Selected</span> ) <i class="fa fa-chevron-down"></i></a>
              </th>
            </tr>
          </thead>

          <tbody>
            {this.renderCategories(categories)}
          </tbody>
        </table>


      </div>


    );
  }
}


export default CategoriesList;
