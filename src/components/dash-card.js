import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export default function DashCard(props) {
  const [background, setBackground] = useState(props.background || "white");
  const [dragging, setDragging] = useState(false);
  const [grid, setGrid] = useState(props.grid || [0, 0]);
  const [position, setPosition] = useState(props.position || { x: 0, y: 0 });

  const style= {
    height: "120px",
    width: "80px",
    gridRowStart: `row-start ${grid[0]}`,
    gridRowEnd: `row-start ${grid[0] + 16}`,
    gridColumnStart: `col-start ${grid[1]}`,
    gridColumnEnd: `col-start ${grid[1]}`
  };

  const handleDrag = (e, ui) => {
    const { x, y } = position
    setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  return(
    <Draggable bounds="parent" onDrag={handleDrag}>
      <div className="Dash-Card" style={style}>
        <header style={{backgroundColor: props.color}}>
          <strong>{props.title}</strong>
        </header>
        <p>{props.body}</p>
        <span style={{fontSize: "10px", marginTop: "-10px"}}>"X: {Math.round(position.x)}, Y: {Math.round(position.y)}"</span>
      </div>
    </Draggable>
  )
}
