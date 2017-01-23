import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData } from '../actions/index';

import Header from '../components/Header';
import GridItem from '../components/GridItem';
import DataPaginate from '../containers/DataPaginate';

class Data extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  renderData() {
    return this.props.data.map( (data, index) => {
      return (
        <div clasName="col-xs-12 col-md-4" key={index}>
          <GridItem info={data}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {this.renderData()}
          </div>
        </div>
        <DataPaginate />
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);
