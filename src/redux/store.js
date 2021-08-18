import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import boardReducer from './reducers/boardReducer';

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


// This needs to be totally re-worked. Leaving it in to avoid breaking, and show pattern.
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
          [action.payload.id]: {
            ...state.cards[action.payload.id],
            status: {
              ...state.cards[action.payload.id][action.payload.status],
              [action.payload.type]: action.payload.status
            }
          }
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
          [action.payload.id]: {
            id: action.payload.id,
            board_id: action.payload.board_id,
            title: action.payload.title,
            color: action.payload.color,
            body: action.payload.body,
            status: action.payload.status
          }
        }
      }
    }
    case 'UPDATE_CARD': {
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.id]: {
            ...state.cards[action.payload.id],
            title: action.payload.title,
            color: action.payload.color,
            body: action.payload.body,
            status: {
              ...state.cards[action.payload.id].status,
              editing: false
            }
          }
        }
      }
    }

    case 'UPDATE_CARD': {
      let card_id = action.payload.id;
      return {
        ...state,
        cards: {
          ...state.cards,
          [card_id]: {
            ...state.cards[card_id],
            title: action.payload.title,
            color: action.payload.color,
            body: action.payload.body
          }
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

    default:
      return state
  }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

store.subscribe( () => saveToLocalStorage(JSON.stringify(store.getState())) );
export default store
