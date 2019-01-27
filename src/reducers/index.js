import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'

const contextMenu = (state = null, action) => {
  const { type, name } = action

  switch (type) {
    case ActionTypes.OPEN_CONTEXT_MENU:
      return name
    case ActionTypes.CLOSE_CONTEXT_MENU:
      return null
    default:
      return state
  }
}

const rootReducer = combineReducers({
  contextMenu
})

export default rootReducer