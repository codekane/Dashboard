import { useState } from 'react';

export default function DashCard(props) {
  const [background, setBackground] = useState(props.background || "white");
  const [row, setRow] = useState(parseInt(props.row) || 1 );
  const [col, setCol] = useState(parseInt(props.col) || 0 );
  const [dragging, setDragging] = useState(false);

  const style= {
    backgroundColor: background,
    gridRowStart: `row-start ${row}`,
    gridRowEnd: `row-start ${row + 16}`,
    gridColumnStart: `col-start ${col}`,
    gridColumnEnd: `col-start ${col}`
  };

  return(
    <div className="Dash-Card" style={style}>


    </div>
  )
}
