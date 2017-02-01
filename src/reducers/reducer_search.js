import { FETCH_SEARCH, FETCH_SEARCH_FAILED, CLEAR_SEARCH } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_SEARCH:
      return action.payload.data;
    case FETCH_SEARCH_FAILED:
      return action.payload;
    case CLEAR_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
