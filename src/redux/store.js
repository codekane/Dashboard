import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const test = "This is a test of the BODY system!!@!!!"

const initialState = {
  board: {
    name: "Personal",
    contents: [
      {
        id: 90210,
        color: "teal",
        grid: [31, 2],
        title: "Dashboard",
        body: test
      },
      {
        id: 90211,
        color: "magenta",
        grid: [42, 3],
        title: "Stonkk",
        body: test
      },
      {
        id: 90212,
        color: "pink",
        grid: [1, 0],
        title: "Ryan Horricks",
        body: test
      },
      {
        id: 90213,
        color: "red",
        grid: [1, 1],
        title: "Job Interview",
        body: test
      },
      {
        id: 90214,
        color: "purple",
        grid: [1, 2],
        title: "Dashboard",
        body: test
      }
    ]
  }
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CARD': {
      return state
    }
    default:
      return state
  }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);
export default store
