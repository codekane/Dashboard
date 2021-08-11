import { useState, useEffect } from 'react';
import store from '../redux/store';

export default function CardCreator(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [color, setColor] = useState("#9999FF");

  const changeTitle = (event) => { setTitle(event.target.value); }
  const changeColor = (event) => { setColor(event.target.value); }
  const changeBody = (event) =>  { setBody(event.target.value); }

  const generateID = () => {
    const d = new Date;
    return d.getTime();
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch({
      type: "CREATE_CARD", payload: { 
        title: title, 
        color: color, 
        body: body, 
        id: generateID() 
      }
    })
    setTitle('');
    setBody('');
    setColor('#9999FF');
  }

  return(
    <div className="CardCreator">
      <h2 style={{color: "white", textAlign: "center"}}>New Card</h2>
      <div className="CardForm">
        <form onSubmit={handleSubmit}>
          <header style={{backgroundColor: color}}>
            <textarea type="text" name="title" 
              placeholder="Title" value={title} 
              onChange={changeTitle} style={{backgroundColor: color}}
              maxLength="20"/>

            <input id="ColorPicker"type="color" value={color} 
              onChange={changeColor} name="color" />

          </header>
          <textarea id="CardFormBody" name="body" value={body} 
            onChange={changeBody} placeholder="Card Contents" rows="3"/>

          <button type="submit" style={{margin: "0 auto"}}>Create</button>
        </form>
      </div>
    </div>
  )
}
