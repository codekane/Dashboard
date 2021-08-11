import { useState, useEffect } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import store from '../redux/store';
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

import EditCardForm from './card/edit-card';




export default function DashCard(props) {
  const card = props.card;

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
        id: card.id
      }
    })
  }

  function editCard(event) {
    store.dispatch({
      type: "EDIT_CARD",
      payload: {
        id: card.id
      }
    })
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
        position: position,
      }
    })
  }, [position])

  if (!card.editing) {

    return(
      <>
        <Draggable  bounds="parent" onDrag={handleDrag} onStop={handleDragStop} position={{x: 0, y:0}}>
          <div className="Dash-Card" style={style} onContextMenu={displayMenu}>
            <header style={{backgroundColor: card.color}}>
              <strong>{card.title}</strong>
            </header>
            <p>{card.body}</p>
          </div>
        </Draggable>
        <Menu id={card.id}>
          <Item onClick={editCard}>Edit</Item>
          <Item onClick={deleteCard}>Delete</Item>
        </Menu>
      </>
    )
  } else if (card.editing == true) {
    return(
      <>
        <div className="Dash-Card Dash-Card-Edit" style={editStyle}>
          <EditCardForm card={card}/>

        </div>
      </>

    )
  }
}
