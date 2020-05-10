import { combineReducers } from 'redux';

const handleCounter = (store = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return store + 1;
    case 'DECREMENT':
      return store - 1;
    default:
      return store;
  }
};

const handleInputChange = (store = '', action) => {
  switch(action.type) {
    case 'UPDATE_VALUE':
      return action.payload;
    default:
      return store;
  }
}

export default combineReducers(
  {
    count: handleCounter,
    value: handleInputChange
  }
) 