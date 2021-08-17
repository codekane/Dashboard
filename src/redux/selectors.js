import { useSelector } from 'react-redux';

function boardsSelector(state) {
  return state.boards
}



export { boardsSelector };
