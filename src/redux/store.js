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

function boardReducer(board, action) {
  switch (action.type) {
    case "UPDATE_CARD_POSITION":
      let card_id = action.payload.id;
      return {
        ...board,
        cards: {
          ...board.cards,
          [card_id]: {
            ...board.cards[card_id],
            position: action.payload.position
          }
        }
      }
    case "DELETE_CARD":
      return {}
    default:
      return board
  }
}



function rootReducer(state = loadFromLocalStorage(), action) {
  switch (action.type) {
    case 'UPDATE_CARD_POSITION': {
      console.log("Updating Card Position");
      let board_id = action.payload.board_id;
      let card_id = action.payload.id;
      return {
        ...state,
        boards: {
          ...state.boards,
          [board_id]: boardReducer(state.boards[board_id], action)
        }
      }
    }
    case 'DELETE_CARD': {
      console.log("Deleting Card");
      let board_id = action.payload.board_id;
      let { [action.payload.id]: xx, ...deletedCardA } = state.cards;
      let { [action.payload.id]: xxx, ...deletedCardB } = state.boards[action.payload.board_id].cards;
      return {
        ...state,
        boards: {
          ...state.boards,
          [board_id]: {
            ...state.boards[board_id],
            //
            cards: {
              ...deletedCardB
            }
          }

        },
        cards: {
          ...deletedCardA,
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
