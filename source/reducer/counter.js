import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../action/counter';

const initialState = 0;

const inc = i => { return i + 1; };
const dec = i => { return i - 1; };

export default function counter(state = initialState, action) {

  switch (action.type) {

  case 'INCREMENT_COUNTER':
    return inc(state);

  case 'DECREMENT_COUNTER':
    return dec(state);

  default:
    return state;
  }

}
