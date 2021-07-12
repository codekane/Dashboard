import logo from './logo.svg';
import './App.css';

import AppHeader from './components/header';
import DashCard from './components/dash-card';

function App() {
  return (
    <div className="App">
      <AppHeader/>

      <div className="Board">
        <div className="Board-Valid">

          <DashCard background="teal" col="2" row="31"/>
          <DashCard background="magenta" col="3" row="42"/>
          <DashCard background="pink" col="0" row="1"/>
          <DashCard col="1" row="1"/>
          <DashCard col="2" row="0"/>


        </div>

      </div>


    </div>
  );
}

export default App;
