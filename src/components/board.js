import { useSelector } from 'react-redux';
import DashCard from './card/DashCard';
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';
import store from '../redux/store';

export default function Board(props) {
  const board = useSelector(state => state.boards[props.id]);

  const getCards = () => {
    let out = []
    Object.keys(board.cards).map(key =>  out.push(board.cards[key]) );
    return out
  }

  const MENU_ID = props.id;
  const { show } = useContextMenu({
    id: props.id,
  });

  function displayMenu(e) { show(e) }

  const generateID = () => {
    const d = new Date;
    return d.getTime();
  }

  function newCard(event) {
    const bounds = event.triggerEvent.target.getBoundingClientRect()
    const trigger = event.triggerEvent;

    store.dispatch({
      type: "CREATE_CARD", payload: {
        title: "",
        color: "#9999FF",
        body: "",
        id: generateID(),
        board_id: props.id,
        status: {
          editing: true,
          complete: false,
          discarded: false
        },
        position: {
          x: Math.round(event.triggerEvent.clientX - bounds.x),
          y: Math.round(event.triggerEvent.clientY - bounds.y)
        }
      }
    })

  }

  return(
    <div className="Board">
      <div className="Board-Valid" onContextMenu={show}>
        {getCards().map(card => (<DashCard card={card} />)
        )}
      </div>
      <Menu id={props.id} style={{zIndex: 0}}>
        <Item onClick={newCard}>New Card</Item>
      </Menu>
    </div>
  )
}
