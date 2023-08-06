const config = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONFIG_DATA':
      return {
        ...state,
        ...action.config
      }
    default: return state;
  }
}
export default config;
