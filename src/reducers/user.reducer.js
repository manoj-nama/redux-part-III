const userInitState = { list: [], loading: false }
const userReducer = (state = userInitState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      const newList = [...state.list, action.user]
      return { ...state, list: newList }
    }
    case "DOUBLE": {
      return { ...state, loading: true, counter: 100 }
    }
    case "FETCH_USERS_STARTED": {
      return { ...state, loading: true }
    }
    case "FETCH_USERS_SUCCESS": {
      return { ...state, list: action.users, loading: false }
    }
    default: {
      return state;
    }
  }
}

export default userReducer;