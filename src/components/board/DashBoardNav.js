import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function DashBoardNav(props) {
  const cards = useSelector(state => state.cards);
  const activeBoard = useSelector(state => state.activeBoard);
  const activeBoardTitle = useSelector(state => state.boards[activeBoard].title);

  const [menuShown, setMenuShown] = useState(false);

  const showMenu = (event) => {
    event.preventDefault();
    setMenuShown(true);
    document.addEventListener('click', closeMenu);
    console.log(menuShown);
  }

  const closeMenu = () => {
    setMenuShown(false);
    document.removeEventListener('click', closeMenu);
  }

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


      <div onClick={showMenu}>
        <p>{activeBoardTitle} <strong>Dashboard</strong></p>
        {
          menuShown ? (
            <div className="menu">
              <div>Test1</div>
              <div>Test2</div>
              <div>Test3</div>
            </div>

          ) : ( null )
        }
      </div>

      <p>{completedCards().length}     <FontAwesomeIcon icon={faStar} style={{color: "gold"}}/></p>
    </div>
  )

}
