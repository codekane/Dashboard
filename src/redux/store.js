import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';

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

function cardReducer(card, action) {
  if (card.id !== action.payload.id) return card;
  switch (action.type) {
    case "UPDATE_CARD_POSITION":
      return Object.assign({}, card, { position: action.payload.position })
    case "UPDATE_CARD":
      return {
        ...card,
        title: action.payload.title,
        color: action.payload.color,
        body: action.payload.body,
        editing: false
      }
    case "EDIT_CARD":
      return {
        ...card,
        editing: true
      }
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
    case 'UPDATE_CARD': {
      return {
        ...state,
        board: {
          ...state.board,
          contents: state.board.contents.map(card => cardReducer(card, action))
        }
      }
    }
    case 'EDIT_CARD': {
      return {
        ...state,
        board: {
          ...state.board,
          contents: state.board.contents.map(card => cardReducer(card, action))
        }
      }
    }
    case 'DELETE_CARD': {
      return {
        ...state,
        board: {
          ...state.board,
          contents: state.board.contents.filter(card => card.id !== action.payload.id)
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
