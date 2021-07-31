import { useSelector } from 'react-redux';
import DashCard from './dash-card';

export default function Board(props) {
  const cards = useSelector(state => state.board.contents);

  return(
    <div className="Board">
      <div className="Board-Valid">
        {cards.map(card => (<DashCard color={card.color} key={card.id}
                                      title={card.title} grid={card.grid} body={card.body}/>)
        )}
      </div>
    </div>
  )
}
