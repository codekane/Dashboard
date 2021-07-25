import { useState } from 'react';

export default function CardCreator(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [color, setColor] = useState("white");

  const changeTitle = (event) => { setTitle(event.target.value); }
  const changeColor = (event) => { setColor(event.target.value); }
  const changeBody = (event) =>  { setBody(event.target.value); }

  return(
    <div className="CardCreator">
      <h2 style={{textAlign: "center", color: "white"}}>New Card</h2>
      <div className="CardForm">
        <form>
          <label>
            Title:
            <input type="text" name="title" 
                   placeholder="Title" value={title} 
                   onChange={changeTitle} style={{marginTop: "10px"}}/>
          </label>
          <label>
            Body:
            <textarea name="body" value={body} 
                      onChange={changeBody} placeholder="Card Contents"/>
          </label>
          <label>
            Color:
            <div>
              <input type="color" value={color} 
                     onChange={changeColor} name="color" />
            </div>
          </label>

          <button type="submit" style={{margin: "0 auto"}}>Create</button>
        </form>
      </div>
    </div>


  )

}
