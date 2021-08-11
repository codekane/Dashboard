import { useState, useEffect } from 'react';
import store from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function EditCardForm(props) {
  const card = props.card;

  const [title, setTitle] = useState(card.title || '');
  const [body, setBody] = useState(card.body || '');
  const [color, setColor] = useState(card.color);

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
  
  const updateCard = (event) => {
    event.preventDefault();
    store.dispatch({
      type: "UPDATE_CARD", payload: {
        id: card.id,
        title: title,
        color: color,
        body: body,
        editing: false
      }
    })
  }


  const handleContextMenu = (event) => {
    event.stopPropagation();
    event.preventDefault();
  }


  return(
    <form onSubmit={updateCard} id="edit-card" onContextMenu={handleContextMenu}>
      <header style={{backgroundColor: color}}>
        <textarea type="text" name="title" 
          placeholder="Title" value={title} 
          onChange={changeTitle} style={{backgroundColor: color}}
          maxLength="20"/>


      </header>
      <textarea id="edit-card-body" name="body" value={body} 
        onChange={changeBody} placeholder="Card Contents" rows="3"/>

      <footer>
        <input type="color" value={color} 
          onChange={changeColor} name="color" />


        <button type="submit" style={{margin: "0 auto"}}>
          <FontAwesomeIcon icon={faCheck} style={{color: "green"}} />
        </button>
      </footer>
    </form>

  )

}
