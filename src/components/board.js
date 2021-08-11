import { useSelector } from 'react-redux';
import DashCard from './dash-card';
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';
import store from '../redux/store';

export default function Board(props) {
  const cards = useSelector(state => state.board.contents);

  const MENU_ID = props.id;
  const { show } = useContextMenu({
    id: props.id,
  });

  function displayMenu(e) {
    show(e)
  }

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
        editing: true,
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
        {cards.map(card => (<DashCard card={card} />)
        )}
      </div>
      <Menu id={props.id} style={{zIndex: 0}}>
        <Item onClick={newCard}>New Card</Item>
      </Menu>
    </div>
  )
}
