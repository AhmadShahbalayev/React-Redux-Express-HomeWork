export const ADD_USERS_TO_STORE = 'ADD_USERS_TO_STORE';
export const LOADING = 'LOADING';

export const addUsersToStore = (users) => {
  return (dispatch) => {
    dispatch(spinner());
    fetch('https://5e8e012722d8cd0016a79e5c.mockapi.io/users')  // https://5e8e012722d8cd0016a79e5c.mockapi.io/users/1/info
      .then(res => res.json())
      .then(res => dispatch({ type: ADD_USERS_TO_STORE, payload: res }))
      .catch(err => console.log(err))
      .finally(dispatch(spinner()));
  }
}

export const spinner = () => {
  return {
    type: LOADING
  }
}