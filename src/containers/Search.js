import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SearchBar from '../containers/SearchBar';
import SearchPaginate from '../containers/SearchPaginate';

class Search extends Component {

  renderSearch() {
    return this.props.search.map( (search) => {
      return (
        <tr key={search.id}>
          <td>
            <div className="profile">
              <img src={search.user.avatar_url}/>
              <p>{search.user_name}</p>
            </div>
          </td>
          <td>
            <p><strong>Name: </strong>{search.name == '' ? 'null' : `${search.name}`}</p>
            <p><strong>Description: </strong>{search.description == '' ? 'null' : `${search.description}`}</p>
            <a href={search.url} target="_blank">Claim link</a>
          </td>
          <td>
            <div className="link">
              <img src={search.thumbUrl} />
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
        <SearchBar/>
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Claim</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSearch()}
          </tbody>
        </table>
        <SearchPaginate />
      </div>
    );
  }
}

function mapStateToProps({ search, term }) {
  return { search };
}

export default connect(mapStateToProps)(Search);
