import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import GridItem from '../components/GridItem';
import SearchBar from '../containers/SearchBar';
import SearchPaginate from '../containers/SearchPaginate';

class Search extends Component {

  renderSearch() {
    return this.props.search.map( (search, index) => {
      return (
        <div className="col-md-4" key={index}>
          <GridItem info={search}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <div className="container">
          <div className="row">
            {this.renderSearch()}
          </div>
          <SearchPaginate />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps)(Search);
