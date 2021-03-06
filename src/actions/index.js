import axios from 'axios';

const ROOT_URL = 'https://api.blockai.com/v1/registrations/challenge?include=user';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const CLEAR_DATA = 'CLEAR_DATA';

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const FETCH_SEARCH_FAILED = 'FETCH_SEARCH_FAILED';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export function fetchData(index=1) {
  const url = `${ROOT_URL}&page=${index}&limit=9`;

  return function(dispatch){
    axios.get(url)
      .then((response) => {
        dispatch({ type: FETCH_DATA, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_DATA_FAILED, payload: err });
      })
  }
}

export function fetchSearch(term, index=1) {
  const url = `${ROOT_URL}&page=${index}&limit=9&search=${term}`;

    return function(dispatch){
      axios.get(url)
        .then((response) => {
          dispatch({ type: FETCH_SEARCH, payload: response.data });
        })
        .catch((err) => {
          dispatch({ type: FETCH_SEARCH_FAILED, payload: err });
        })
    }
}

export function updateSearch(term) {
  return {
    type: UPDATE_SEARCH,
    payload: term
  }
}

export function clearData() {
  return {
    type: CLEAR_DATA,
    payload: []
  }
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH,
    payload: []
  }
}
