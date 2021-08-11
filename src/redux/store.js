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
        id: 1628674142088,
        color: "#7dfbff",
        position: { x: 35, y: 197 },
        title: "Drag Me!",
        body: 'Figure out what\'s important',
      },
      {
        id: 1628674173378,
        color: "#9999FF",
        position: { x: 34, y: 328},
        title: "Create Me!",
        body: 'Right click on the board to begin'
      },
      {
        id: 1628674191680,
        color: "#d1ffee",
        position: { x: 33, y: 462 },
        title: 'Edit Me! Delete Me! ',
        body: 'Right Click on the Card'
      },
      {
        id: 1628674368383,
        color: "#9999FF",
        position: { x: 182, y: 53 },
        title: "Personal Kanban",
        body: 'Version 0.13'
      },
      {
        id: 1628674456874,
        color: "#FF315C",
        position: { x: 335, y: 192 },
        title: 'Depend on Me?',
        body: 'Development ongoing... But I use it.'
      }
    ]
  }
}

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
