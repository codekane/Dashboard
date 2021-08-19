import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';

import NavBar from './components/navbar.js';
import AppHeader from './components/header';
import DashCard from './components/card/DashCard';
import Board from './components/board';
import BoardSelect from './components/BoardSelect';
import { useEffect } from 'react';



function App() {
  const activeBoard = useSelector(state => state.activeBoard);
  useEffect( () => {
    document.title = "Dashboard";
  }, []);


  return (
    <div className="App">


      <NavBar/>
      <div>
        <div className="DashBoard">
          <BoardSelect />
          <Board title="personal" id={activeBoard}/>
        </div>
      </div>


    </div>
  );
}

export default App;
