import { FETCH_DATA, FETCH_DATA_FAILED, CLEAR_DATA } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_DATA:
      return action.payload.data;
    case FETCH_DATA_FAILED:
      return action.payload;
    case CLEAR_DATA:
      return action.payload;
    default:
      return state;
  }
}
