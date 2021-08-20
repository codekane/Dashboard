import store from '../redux/store';
import { useSelector } from 'react-redux';
import { boardsSelector } from '../redux/selectors';
import BoardSelectItem from './BoardSelectItem';


export default function BoardSelect(props) {
  let boards = useSelector(state => state.boards)
  let activeBoard = useSelector(state => state.activeBoard);

  const getBoards = () => {
    let keys = Object.keys(boards);
    let out = [];
    for (let i = 0; i < keys.length; i++) {
      out.push( boards[keys[i]])
    }
    return out;
  }

  return (
    <div id="BoardSelect">

      <b><span id="Brand" style={{marginLeft: "15px"}}>Dashboard</span></b>
      <ul>
        {getBoards().map(board => (<BoardSelectItem board={board} activeBoard={activeBoard}/>))}
        <li>Add New</li>
      </ul>

    </div>

  )

}
