import store from '../redux/store';
import { useSelector } from 'react-redux';
import { boardsSelector } from '../redux/selectors';


export default function BoardSelect(props) {
  let boards = useSelector(state => state.boards)

  const getBoards = () => {
    let keys = Object.keys(boards);
    let out = [];
    for (let i = 0; i < keys.length; i++) {
      out.push( boards[keys[i]])
    }
    return out;
  }

  return (
    <div id="BoardSelect" style={{width: "150px", height: "100px", backgroundColor: "teal"}}>
      <ul>
        {getBoards().map(board => (<li id={board.id}>{board.title}</li>))}
        <li>Add New</li>
      </ul>

    </div>

  )

}
