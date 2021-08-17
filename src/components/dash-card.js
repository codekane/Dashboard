import { useState, useEffect } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import store from '../redux/store';
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';
import { useSelector } from 'react-redux';
import EditCardForm from './card/edit-card';




export default function DashCard(props) {
  const card = props.card;
  const cardData = useSelector(state => state.cards[card.id]);

  const [editing, setEditing]= useState(false);

  const [position, setPosition] = useState(card.position || { x: 150, y: 150 });
  const initPos = card.position || { x: 150, y: 150 };

  const [delta, setDelta] = useState({ x: 0, y: 0 });

  const { show } = useContextMenu({ id: card.id });
  function displayMenu(e) { 
    e.stopPropagation();
    show(e) 
  }

  function handleItemClick({ event, props, triggerEvent, data }) {
    console.log(event, props, triggerEvent, data);
  }

  function deleteCard(event) {
    store.dispatch({
      type: "DELETE_CARD",
      payload: {
        id: card.id,
        board_id: cardData.board_id
      }
    })
  }

  function editCard(event) {
    setEditing(true);
  }


  const style= {
    gridRow: `${initPos.y} / ${initPos.y + 80}`,
    gridColumn: `${initPos.x} / ${initPos.x + 120}`
  };
  const editStyle = {
    gridRow: `${initPos.y} / ${initPos.y + 80}`,
    gridColumn: `${initPos.x} / ${initPos.x + 120}`,
    transform: "scale(1.25)"
  }


  const handleDrag = (e, ui) => {
    const { x, y } = delta
    setDelta({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  const handleDragStop = (event, p) => {
    const { x, y } = delta
    setPosition({ x: position.x + x, y: position.y + y });
    setDelta({ x: 0, y: 0 });
  }

  useEffect( () => {
    store.dispatch({
      type: "UPDATE_CARD_POSITION",
      payload: {
        id: card.id,
        board_id: cardData.board_id,
        position: position,
      }
    })
  }, [position, cardData.board_id, card.id])

  if (!editing) {

    return(
      <>
        <Draggable  bounds="parent" onDrag={handleDrag} onStop={handleDragStop} position={{x: 0, y:0}}>
          <div className="Dash-Card" style={style} onContextMenu={displayMenu}>
            <header style={{backgroundColor: cardData.color}}>
              <strong>{cardData.title}</strong>
            </header>
            <p>{cardData.body}</p>
          </div>
        </Draggable>
        <Menu id={card.id}>
          <Item onClick={editCard}>Edit</Item>
          <Item onClick={deleteCard}>Delete</Item>
        </Menu>
      </>
    )
  } else if (editing === true) {
    return(
      <>
        <div className="Dash-Card Dash-Card-Edit" style={editStyle} edit={setEditing}>
          <EditCardForm card={card}/>
        </div>
      </>
    )
  }
}
