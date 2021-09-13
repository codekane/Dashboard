import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './BoardNav.css';
import BoardNavItem from './BoardNavItem';

export default function BoardNav(props) {
  const cards = useSelector(state => state.cards);
  const boards = useSelector(state => state.boards)
  const activeBoard = useSelector(state => state.activeBoard);
  const activeBoardTitle = useSelector(state => state.boards[activeBoard].title);

  const getCards = () => {
    let out = []
    Object.keys(cards).map(key =>  out.push(cards[key]) );
    return out
  }

  const getBoards = () => {
    let keys = Object.keys(boards);
    let out = [];
    for (let i = 0; i < keys.length; i++) {
      if (boards[keys[i]].id !== activeBoard) {
       out.push( boards[keys[i]]) }
    }
    return out;
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


      <div >
        <nav role="navigation" className="menu">
          <ul>
            <li>{activeBoardTitle} <strong>Dashboard</strong>
              <ul className="dropdown">
                {getBoards().map(board => (<BoardNavItem board={board}  />))}

              </ul>
            </li>
          </ul>
        </nav>

      </div>

      <p>{completedCards().length}     <FontAwesomeIcon icon={faStar} style={{color: "gold"}}/></p>
    </div>
  )

}
