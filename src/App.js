import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';

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

      <AppHeader/>

      <div className="DashBoard">
        <CardCreator/>

        <Board/>
      </div>


    </div>
  );
}

export default App;
