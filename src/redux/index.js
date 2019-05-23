import { createBrowserHistory } from 'history';
import { createStore, combineReducers } from 'redux';


const simpleReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export const exampleHistory = createBrowserHistory();
// const middleware = [thunk, routerMiddleware(exampleHistory)];

const rootReducer = history => {
  return combineReducers({
    simpleReducer,
  });
};

// TODO: store creation is different between EXH and CXH - which version to use?
export const exampleStore = createStore(
  rootReducer(exampleHistory),
);



export default exampleStore;
