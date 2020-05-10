// Action creator:

export const storeValue = value => {
  return {
    type: 'STORE_VALUE',
    payload: value
  }
}

export const resetValue = () => {
  return {
    type: 'RESET_VALUE'
  }
}
