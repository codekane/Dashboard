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
        grid: [248, 231],
        title: "Dashboard",
        body: test
      },
      {
        id: 90211,
        color: "magenta",
        grid: [336, 346],
        title: "Stonkk",
        body: test
      },
      {
        id: 90212,
        color: "pink",
        grid: [8, 15],
        title: "Ryan Horricks",
        body: test
      },
      {
        id: 90213,
        color: "red",
        grid: [8, 120],
        title: "Job Interview",
        body: test
      },
      {
        id: 90214,
        color: "purple",
        grid: [8, 240],
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
    case 'CREATE_CARD': {
      return {
        ...state,
        board: {
          ...state.board,
          contents: [
            ...state.board.contents,
            action.payload
          ]
        }
      }
      /*
      return state.board.contents.push(action.payload)
      var new_state = state;
      new_state.board.contents.push(action.payload);

      return new_state
      console.log(new_state);
      */

    }
    default:
      return state
  }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);
export default store
