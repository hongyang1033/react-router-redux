import React, { Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData } from '../actions/index';

class DataPaginate extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 1 };

    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickNext(event) {
    event.preventDefault();
    this.props.fetchData(this.state.page + 1)
    this.setState({ page: this.state.page + 1 })
    window.scrollTo(0,0);
  }

  onClickPrev(event) {
    event.preventDefault();
    this.props.fetchData(this.state.page - 1);
    this.setState({ page: this.state.page - 1 });
    window.scrollTo(0,0);
  }

  render() {
    return (
      <nav aria-label="..." className={(this.props.data.length == 0 ? 'display-none' : '')}>
        <ul className="pagination pagination-lg">
          <li onClick={this.onClickPrev} className={"page-item " + (this.state.page == 1 ? 'display-none' : '')}>
            <a className="page-link" href="#">Previous</a>
          </li>
          <li className={"page-item " + (this.props.data.length < 10 ? 'display-none' : '')} onClick={this.onClickNext}>
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps( { data } ) {
  return { data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPaginate);
