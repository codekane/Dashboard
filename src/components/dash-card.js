import { useState, useEffect } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import store from '../redux/store';
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';




export default function DashCard(props) {
  const card = props.card;

  const [editing, setEditing] = useState(false);
  const [position, setPosition] = useState(card.position || { x: 150, y: 150 });
  const initPos = card.position || { x: 150, y: 150 };

  const [delta, setDelta] = useState({ x: 0, y: 0 });

  const { show } = useContextMenu({ id: card.id });
  function displayMenu(e) { show(e) }

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


  const style= {
    gridRow: `${initPos.y} / ${initPos.y + 80}`,
    gridColumn: `${initPos.x} / ${initPos.x + 120}`
  };


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

  if (!editing) {

  return(
    <>
      <Draggable  bounds="parent" onDrag={handleDrag} onStop={handleDragStop} position={{x: 0, y:0}}>
        <div className="Dash-Card" style={style} onContextMenu={show}>
          <header style={{backgroundColor: card.color}}>
            <strong>{card.title}</strong>
          </header>
          <p>{card.body}</p>
        </div>
      </Draggable>
      <Menu id={card.id}>
        <Item onClick={handleItemClick}>Edit></Item>
        <Item onClick={deleteCard}>Delete</Item>
        <Item disabled onClick={handleItemClick}>Complete</Item>
        <Item disabled onClick={handleItemClick}>Inspect</Item>
      </Menu>
    </>
  )
  } else if (editing == true) {
    return(
      <>
        <h1>PENIS</h1>
      </>
    )
  }
}
