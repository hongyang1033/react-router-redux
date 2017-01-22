import React, { Component } from 'react';

import Search from '../containers/Search';
import Data from '../containers/Data';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
