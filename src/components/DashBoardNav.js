import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export default function DashBoardNav(props) {
  const cards = useSelector(state => state.cards);
  const activeBoard = useSelector(state => state.activeBoard);
  const getCards = () => {
    let out = []
    Object.keys(cards).map(key =>  out.push(cards[key]) );
    return out
  }
  const completedCards = () => {
    let out = []
    Object.keys(cards).map(key =>  out.push(cards[key]) );
    return out.filter(card => card.status.complete === true && card.board_id === activeBoard);
  }
  const discardedCards = () => {
    let out = []
    Object.keys(cards).map(key =>  out.push(cards[key]) );
    return out.filter(card => card.status.discarded === true && card.board_id === activeBoard);

  }

  return (
    <div className="DashBoardNav">
      <p>{discardedCards().length}     <FontAwesomeIcon icon={faRecycle} style={{color: "#43F7C8"}}/></p>
      <p>{completedCards().length}     <FontAwesomeIcon icon={faStar} style={{color: "gold"}}/></p>
    </div>
  )

}
