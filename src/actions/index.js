export const OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU"
export const CLOSE_CONTEXT_MENU = "CLOSE_CONTEXT_MENU"

export const openContextMenu =  name => ({
  type: OPEN_CONTEXT_MENU,
  name
})

export const closeContextMenu =  () => ({
  type: CLOSE_CONTEXT_MENU
})


// import { CALL_API, Schemas } from '../middleware/api'

// export const USER_REQUEST = 'USER_REQUEST'
// export const USER_SUCCESS = 'USER_SUCCESS'
// export const USER_FAILURE = 'USER_FAILURE'

// const fetchUser = login => ({
//   [CALL_API]: {
//     types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
//     endpoint: `users/${login}`,
//     schema: Schemas.USER
//   }
// })

// export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {
//   const user = getState().entities.users[login]
//   if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
//     return null
//   }

//   return dispatch(fetchUser(login))
// }

// export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
// export const resetErrorMessage = () => ({
//     type: RESET_ERROR_MESSAGE
// })