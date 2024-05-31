import React from 'react';


const LevelButtons = ({onClick}) => {
  const handleEasyLevelClick = () => {
    onClick('easy')
    console.log('Easy Level button clicked');
  };

  const handleMediumLevelClick = () => {
    onClick('medium')
    console.log('Medium Level button clicked');
  };

  const handleHardLevelClick = () => {
    onClick('hard')
    console.log('Hard Level button clicked');
  };

  return (
    <div>
      <h1>How confident are you today? Select your challenge</h1>
      <button onClick={handleEasyLevelClick}>Easy</button>
      <button onClick={handleMediumLevelClick}>Medium</button>
      <button onClick={handleHardLevelClick}>Hard</button>
    </div>
  );
};


export default LevelButtons;