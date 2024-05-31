import { useCallback, useState } from 'react';
import './App.css';
import StartButtons from './components/StartButtons';
import LevelButtons from './components/LevelButtons';
import CategoriesButtons from './components/CategoriesButtons';
import Questions from './components/Questions';

function App() {

  const [players, setPlayers] = useState(null)
  const [level, setLevel] = useState(null)
  const [category, setCategory] = useState(null)

  // memo functions with useCallback
  const onBackLevel = useCallback(() => {
    setPlayers(null)
  }, [])

  const onBackCategories = useCallback(() => {
    setLevel(null)
  }, [])

  const onRestart = useCallback(() => {
    setPlayers(null)
    setLevel(null)
    setCategory(null)
  }, [])

  return (
    <div className="App">
      <h1>Trivia Time</h1>
      {players === null && <StartButtons onClick={setPlayers} />}
      {players !== null && level === null && <LevelButtons onClick={setLevel} onBack={onBackLevel} />}
      {players !== null && level !== null && category === null && <CategoriesButtons onClick={setCategory} onBack={onBackCategories} />}
      {players !== null && level !== null && category !== null && <Questions level={level} category={category} onRestart={onRestart} />}
    </div>
  );
}

export default App;
