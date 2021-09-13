import store from '../../redux/store';
export default function BoardNavItem(props) {

  const selectBoard = () => {
    store.dispatch({
      type: "SELECT_BOARD", payload: {
        board: props.board.id
      }
    })
  }

  return(
    <li id={props.board.id} onClick={selectBoard}>{props.board.title}</li>
  )
}
