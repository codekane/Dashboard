import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import boardReducer from './reducers/boardReducer';
import cardReducer from './reducers/cardReducer';

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


function rootReducer(state = loadFromLocalStorage(), action) {
  switch (action.type) {
    case 'UPDATE_CARD_POSITION': {
      console.log("Updating Card Position");
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.board_id]: boardReducer(state.boards[action.payload.board_id], action)
        }
      }
    }
    case 'DELETE_CARD': {
      console.log("Deleting Card");
      let { [action.payload.id]: xx, ...updatedCards } = state.cards;
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.board_id]: boardReducer(state.boards[action.payload.board_id], action)
        },
        cards: {
          ...updatedCards,
        }
      }
    }
    case 'UPDATE_CARD_STATUS': {
      console.log("Updating Card Status");
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.id]: cardReducer(state.cards[action.payload.id], action)
        }
      }
    }
    case 'CREATE_CARD': {
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.board_id]: boardReducer(state.boards[action.payload.board_id], action)
        },
        cards: {
          ...state.cards,
          [action.payload.id]: cardReducer(state.cards[action.payload.id], action)
        }
      }
    }
    case 'UPDATE_CARD': {
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.id]: cardReducer(state.cards[action.payload.id], action)
        }
      }
    }
    case 'SELECT_BOARD': {
      return {
        ...state,
        activeBoard: action.payload.board
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
