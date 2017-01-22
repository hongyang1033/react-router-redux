import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData } from '../actions/index';

import Header from '../components/Header';
import DataPaginate from '../containers/DataPaginate';

class Data extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  renderData() {
    return this.props.data.map( (data) => {
      return (
        <tr key={data.id}>
          <td>
            <div className="profile">
              <img src={data.user.avatar_url}/>
              <p>{data.user_name}</p>
            </div>
          </td>
          <td>
            <p><strong>Name: </strong>{data.name == '' ? 'null' : `${data.name}`}</p>
            <p><strong>Description: </strong>{data.description == '' ? 'null' : `${data.description}`}</p>
            <a href={data.url} target="_blank">Claim link</a>
          </td>
          <td>
            <div className="link">
              <img src={data.thumbUrl} />
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Claim</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.renderData()}
          </tbody>
        </table>
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
