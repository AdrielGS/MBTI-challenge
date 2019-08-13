export const setResult = (state, { email, result }) => {
  state.email = email
  state.result = result
}

export const clearResult = (state) => {
  state.email = null
  state.result = null
}
