import store from '../redux/store';
export default function BoardSelectItem(props) {

  const selectBoard = () => {
    store.dispatch({
      type: "SELECT_BOARD", payload: {
        board: props.board.id
      }
    })
  }

  const activeBoard = () => {
    if (props.activeBoard === props.board.id) {
      return {
        backgroundColor: "teal"
      }
    } else { return {}  }
  }

  return(
    <li id={props.board.id} onClick={selectBoard} style={activeBoard()}>{props.board.title}</li>
  )

}
