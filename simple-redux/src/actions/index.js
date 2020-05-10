export const increase = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrease = () => {
  return {
    type: 'DECREMENT'
  }
}

export const updateValue = (e) => {
  return {
    type: 'UPDATE_VALUE',
    payload: e.target.value
  }
}