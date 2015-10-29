import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../component/counter';
import * as CounterActions from '../action/counter';

class CounterContainer extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {



  }

  render() {

    const { increment, decrement, counter } = this.props;

    return (
      <Counter onIncrement={increment} onDecrement={decrement} counter={counter} />
    );

  }

}

function mapStateToProps(state) {

  const { counter } = state;

  return {
    counter
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
