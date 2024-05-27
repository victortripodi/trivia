import logo from './logo.svg';
import './App.css';
import StartButtons from './components/StartButtons';
import LevelButtons from './components/LevelButtons';
import CategoriesButtons from './components/CategoriesButtons';
import { useState } from 'react';

function App() {

  const [players, setPlayers]  = useState(null)
  const [levels, setLevels]  = useState(null)
  const [categories, setCategories]  = useState(null)


  return (
    <div className="App">
      <h1>Trivia Time</h1>
      {players === null && <StartButtons onClick={setPlayers} />}
      {players !== null && levels === null && <LevelButtons onClick={setLevels} />}
      {players !== null && levels !== null && <CategoriesButtons onClick={setCategories} />}


      
    </div>
  );
}

export default App;
