import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export default function DashCard(props) {
  const [background, setBackground] = useState(props.background || "white");
  const [dragging, setDragging] = useState(false);
  const [grid, setGrid] = useState(props.grid || [0, 0]);

  const style= {
    height: "120px",
    width: "80px",
    gridRowStart: `row-start ${grid[0]}`,
    gridRowEnd: `row-start ${grid[0] + 16}`,
    gridColumnStart: `col-start ${grid[1]}`,
    gridColumnEnd: `col-start ${grid[1]}`
  };

  return(
    <Draggable bounds="parent">
      <div className="Dash-Card" style={style}>
        <header style={{backgroundColor: props.color}}>
          <strong>{props.title}</strong>
        </header>
        <p>{props.body}</p>
      </div>
    </Draggable>
  )
}
