const initialState = [];

export default function issues(state = initialState, action) {
  switch (action.type) {
    case 'ISSUES_LOADED':
      return action.data.issues;
    default:
      return state;
  }
};