const initialState = {
  list             : [],
  count            : 0,
  auth             : false,
  id               : ''
}

function AuthorizationReducer(state = initialState, action) {
  switch (action.type) {

    case "LOGIN":
        return Object.assign({}, state, {
          auth           : action.payload.status,
          id             : action.payload.id
    })
    case "SIGNUP":
      return Object.assign({}, state, {
        auth             :  action.payload.status,
      })

    default:
      return state
  }
}

export default AuthorizationReducer;
