import axios from 'axios';

const api = axios.create({
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
});

export const load = () => dispatch => {
  dispatch({
    type: 'ISSUES_LOADING'
  });
  api.get('http://localhost:8080/issues')
    .then(res => {
      dispatch({
        type: 'ISSUES_LOADED',
        data: res.data
      })
    }).catch(() => {
      dispatch({
        type: 'ISSUES_LOADING_ERROR'
      });
    });
};

export const dataSearch = (filter) => dispatch => {
  dispatch({
    type: 'ISSUES_LOADING'
  });
  api.post('http://localhost:8080/filter', filter)
    .then(res => {
      dispatch({
        type: 'ISSUES_LOADED',
        data: res.data
      })
    }).catch(() => {
      dispatch({
        type: 'ISSUES_LOADING_ERROR'
      });
    });
};