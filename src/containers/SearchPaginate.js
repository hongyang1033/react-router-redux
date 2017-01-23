import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSearch } from '../actions/index';

class SearchPaginate extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 1 };

    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickNext(event) {
    event.preventDefault();
    this.props.fetchSearch(this.props.term , this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
    window.scrollTo(0,0);
  }

  onClickPrev(event) {
    event.preventDefault();
    this.props.fetchSearch(this.props.term , this.state.page - 1);
    this.setState({ page: this.state.page - 1 });
    window.scrollTo(0,0);
  }

  render() {
    return (
      <nav aria-label="..." className={"paginate" + (this.props.search.length == 0 ? 'display-none' : '')}>
        <ul className="pagination pagination-lg">
          <li onClick={this.onClickPrev} className={"page-item " + (this.state.page == 1 ? 'display-none' : '')}>
            <a className="page-link" href="#">Previous</a>
          </li>
          <li className={"page-item " + (this.props.search.length < 9 ? 'display-none' : '')} onClick={this.onClickNext}>
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps( { term, search } ) {
  return { term, search };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPaginate);
