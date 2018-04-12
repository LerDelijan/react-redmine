import axios from 'axios';

const url = 'http://localhost:8080/';
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
  api.get(`${url}issues`)
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
  api.post(`${url}filter`, filter)
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