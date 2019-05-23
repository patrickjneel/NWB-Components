import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const thing = (state = {}, action) => {
  return state;
}


export default (history) => combineReducers({
  router: connectRouter(history),
  thing,
})