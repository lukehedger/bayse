import React, { Component, PropTypes } from 'react';
import useSheet from 'react-jss';
import classSet from 'classnames';

const styles = {
  above: {
    'color': '#BADA55'
  },
  below: {
    'color': '#C55'
  }
}

@useSheet(styles)
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
    const { classes } = this.props.sheet;

    return (
      <div>
        <h1 className={classSet({
          [classes.above]: counter >= 0,
          [classes.below]: counter < 0
        })}>
          Counter - {counter}
        </h1>

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
