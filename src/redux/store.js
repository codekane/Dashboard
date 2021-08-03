import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", state);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return initialState;
    return JSON.parse(serializedState);

  } catch (e) {
    console.warn(e);
  }
}


const test = "This is a test of the BODY system!!@!!!"

const initialState = {
  board: {
    name: "Personal",
    contents: [
      {
        id: 90210,
        color: "teal",
        position: { x: 231, y: 248 },
        title: "Dashboard",
        body: test
      },
      {
        id: 90211,
        color: "magenta",
        position: { x: 346, y: 336},
        title: "Stonkk",
        body: test
      },
      {
        id: 90212,
        color: "pink",
        position: { x: 15, y: 8 },
        title: "Ryan Horricks",
        body: test
      },
      {
        id: 90213,
        color: "red",
        position: { x: 120, y: 8 },
        title: "Job Interview",
        body: test
      },
      {
        id: 90214,
        color: "purple",
        position: { x: 240, y: 8 },
        title: "Dashboard",
        body: test
      }
    ]
  }
}

function cardReducer(card, action) {
  if (card.id !== action.payload.id) return card;
  switch (action.type) {
    case "UPDATE_CARD_POSITION":
      return Object.assign({}, card, { position: action.payload.position })
    default:
      return card
  }
  //return Object.assign({}, card, { position: action.payload.position })
  return {
    ...card,
    position: action.payload.position
  }

}

function rootReducer(state = loadFromLocalStorage(), action) {
  switch (action.type) {
    case 'UPDATE_CARD_POSITION': {
      return {
        ...state,
        board: {
          ...state.board,
          contents: state.board.contents.map(card => cardReducer(card, action))

        }

      }
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
    }
    default:
      return state
  }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

store.subscribe( () => saveToLocalStorage(JSON.stringify(store.getState())) );
export default store
