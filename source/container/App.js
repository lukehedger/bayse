import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <div>
        <h1>App</h1>

        <Link to="/counter">Counter</Link>

        {/* render containers dynamically based on route */}
        {this.props.children}
      </div>
    );

  }

}
