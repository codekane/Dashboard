export default function cardReducer(card, action) {
  switch (action.type) {
    case 'CREATE_CARD':
      return {
        id: action.payload.id,
        board_id: action.payload.board_id,
        title: action.payload.title,
        color: action.payload.color,
        body: action.payload.body,
        status: action.payload.status
      }
    case 'UPDATE_CARD':
      return {
        ...card,
        title: action.payload.title,
        color: action.payload.color,
        body: action.payload.body,
        status: {
          ...card.status,
          editing: false
        }
      }
    case 'UPDATE_CARD_STATUS':
      return {
        ...card,
        status: {
          ...card.status,
          [action.payload.type]: action.payload.status
        }
      }
    default:
      return card
  }
}
