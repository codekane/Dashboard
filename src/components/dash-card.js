import { useState, useEffect } from 'react';

export default function DashCard(props) {
  const [background, setBackground] = useState(props.background || "white");
  const [row, setRow] = useState(parseInt(props.row) || 1 );
  const [col, setCol] = useState(parseInt(props.col) || 0 );
  const [dragging, setDragging] = useState(false);

  const [xPos, setXPos] = useState(row * 8);
  const [yPos, setYPos] = useState((col * 25) + "%");

  useEffect( () => {
    if (!dragging) return;

    var onMouseUp = (e) => {
      setDragging(false);
      // This is where I should be putting the code to find the correct row to place in.
      // SEee:
      // console.log(`offsetTop: ${Math.round((e.target.offsetTop - 84) / 8)}, row: ${row}`);
      console.log("onMouseUp has Fired");
      e.stopPropagation();
      e.preventDefault();
    }

    var onMouseMove = (e) => {
      console.log(`onMouseMove has Fired`);

      console.log(e);
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    };

  }, [dragging]);

  const style= {
    backgroundColor: background,
    gridRowStart: `row-start ${row}`,
    gridRowEnd: `row-start ${row + 16}`,
    gridColumnStart: `col-start ${col}`,
    gridColumnEnd: `col-start ${col}`
  };

  const style2 = {
    backgroundColor: background,
    position: 'absolute',
    left: (720 + xPos) + 'px',
    top: (84 + yPos) + 'px',
    height: '128px',
    width: '63.5px'
  }

  var onMouseDown = (e) => {
    // Only left mouse button
    if (e.button !== 0) return

    //console.log("onMouseDown has Fired");
    //console.log(`xPos: ${xPos}, yPos: ${yPos}`);
    console.log(e);
    //console.log(e);
    //console.log(`offsetTop: ${Math.round((e.target.offsetTop - 84) / 8)}, row: ${row}`);

    setDragging(true);

    e.stopPropagation();
    e.preventDefault();
  }



  return(
    <div className="Dash-Card" style={dragging ? style2 : style} onMouseDown={onMouseDown}>


    </div>
  )
}
