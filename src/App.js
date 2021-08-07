import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';

import NavBar from './components/navbar.js';
import AppHeader from './components/header';
import DashCard from './components/dash-card';
import CardCreator from './components/card-creator';
import Board from './components/board';
import { useEffect } from 'react';



function App() {
  useEffect( () => {
    document.title = "Dashboard";
  }, []);


  return (
    <div className="App">


      <NavBar/>
      <div>
        <div className="DashBoard">
          <Board/>
          <CardCreator/>
        </div>
      </div>


    </div>
  );
}

export default App;
