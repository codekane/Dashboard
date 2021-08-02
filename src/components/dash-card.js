import { useState, useEffect } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

export default function DashCard(props) {
  const [background, setBackground] = useState(props.background || "white");
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(props.position || { x: 150, y: 150 });
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const initPos = props.position || { x: 150, y: 150 };

  const style= {
    height: "120px",
    width: "80px",
    gridRow: `${initPos.y} / ${initPos.y + 80}`,
    gridColumn: `${initPos.x} / ${initPos.x + 120}`
  };


  const handleDrag = (e, ui) => {
    const { x, y } = delta
    setDelta({ x: x + ui.deltaX, y: y + ui.deltaY });
    console.log(JSON.parse(localStorage.getItem("state")));
  };

  const handleDragStop = (event, p) => {
    const { x, y } = delta
    setPosition({ x: position.x + x, y: position.y + y });
    setDelta({ x: 0, y: 0 });
  }

  return(
    <Draggable bounds="parent" onDrag={handleDrag} onStop={handleDragStop}>
      <div className="Dash-Card" style={style}>
        <header style={{backgroundColor: props.color}}>
          <strong>{props.title}</strong>
        </header>
        <p>{props.body}</p>
        <span style={{fontSize: "8px", marginTop: "-10px", display: "none"}}>X: {position.x}, Y: {position.y}</span><br/>
        <span style={{fontSize: "8px", marginTop: "-10px", display: "none"}}>dX: {Math.round(delta.x)}, dY: {Math.round(delta.y)}</span>
      </div>
    </Draggable>
  )
}
