import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearSearch, updateSearch } from '../actions/index';

import Header from '../components/Header';
import GridItem from '../components/GridItem';
import SearchBar from '../containers/SearchBar';
import SearchPaginate from '../containers/SearchPaginate';

class Search extends Component {
  componentWillUnmount() {
    this.props.clearSearch();
    this.props.updateSearch('');
  }

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
        <div className="container">
          <SearchBar />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearSearch, updateSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
