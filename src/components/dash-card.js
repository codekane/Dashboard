import { useState, useEffect } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import store from '../redux/store';
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';




export default function DashCard(props) {
  const [background, setBackground] = useState(props.background || "white");
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(props.position || { x: 150, y: 150 });
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const initPos = props.position || { x: 150, y: 150 };

  const MENU_ID=props.id;

  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function handleItemClick({ event, props, triggerEvent, data }) {
    console.log(event, props, triggerEvent, data);
  }

  function deleteCard(event) {

    store.dispatch({
        type: "DELETE_CARD",
        payload: {
          id: props.id
        }
      })


    console.log(MENU_ID);
  }

  function displayMenu(e) {
    show(e)
  }

  const style= {
    height: "120px",
    width: "80px",
    gridRow: `${initPos.y} / ${initPos.y + 80}`,
    gridColumn: `${initPos.x} / ${initPos.x + 120}`,
    transform: 'none !important'
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

  // Update the cards location upon expiration of life.
  // Doesn't seem to ever be called!?
  useEffect( () => {
    return () => {
      store.dispatch({
        type: "UPDATE_CARD_POSITION",
        payload: {
          id: props.id,
          position: position,
        }
      })
    };
  }, [])

  // FYI this calls it at the end of every move (interestingly)
  useEffect( () => {
    console.log(initPos);
    store.dispatch({
      type: "UPDATE_CARD_POSITION",
      payload: {
        id: props.id,
        position: position,
      }
    })
  }, [position])

  return(
    <>
      <Draggable  bounds="parent" onDrag={handleDrag} onStop={handleDragStop} position={{x: 0, y:0}}>
        <div className="Dash-Card" style={style} onContextMenu={show}>
          <header style={{backgroundColor: props.color}}>
            <strong>{props.title}</strong>
          </header>
          <p>{props.body}</p>
        </div>
      </Draggable>
      <Menu id={props.id}>
        <Item onClick={deleteCard}>Discard</Item>
        <Item disabled onClick={handleItemClick}>Complete</Item>
        <Item disabled onClick={handleItemClick}>Inspect</Item>

      </Menu>
    </>
  )
}
