export default (state = '', action) => {
  switch(action.type) {
    case 'STORE_VALUE':
      return action.payload;
    case 'RESET_VALUE':
      return '';
    default:
      return state;
  }
}