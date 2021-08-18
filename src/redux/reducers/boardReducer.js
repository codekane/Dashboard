export default function boardReducer(board, action) {
  switch (action.type) {
    case "UPDATE_CARD_POSITION":
      return {
        ...board,
        cards: {
          ...board.cards,
          [action.payload.id]: {
            ...board.cards[action.payload.id],
            position: action.payload.position
          }
        }
      }
    case "DELETE_CARD":
      let { [action.payload.id]: x, ...updated } = board.cards;
      return {
        ...board,
        cards: {
          ...updated
        }
      }
    case "CREATE_CARD":
      return {
        ...board,
        cards: {
          ...board.cards,
          [action.payload.id]: {
            id: action.payload.id,
            position: action.payload.position
          }
        }
      }
    default:
      return board
  }
}
