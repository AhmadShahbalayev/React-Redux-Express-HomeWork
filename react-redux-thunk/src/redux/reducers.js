import { ADD_USERS_TO_STORE, LOADING } from './actions';

const initialState = {
  users: [],
  loading: false
};

const reducer = (store = initialState, action) => {
  switch(action.type) {
    case ADD_USERS_TO_STORE:
      return {
        ...store, 
        users: action.payload
      };
      case LOADING:
        return {
          ...store,
          loading: !store.loading
        }
    default:
      return store;
  }
}

export default reducer;