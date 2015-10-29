import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  constructor(props) {

    super(props);

    const { onIncrement, onDecrement, counter } = this.props;

    // bind action triggers for use in map callback
    this.onIncrement = onIncrement.bind(this);
    this.onDecrement = onDecrement.bind(this);

  }

  render() {

    const { counter } = this.props;

    return (
      <div>
        <h1>Counter - {counter}</h1>
        <button onClick={e => this.onIncrement()}>+</button>
        <button onClick={e => this.onDecrement()}>-</button>
      </div>
    );

  }

}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
