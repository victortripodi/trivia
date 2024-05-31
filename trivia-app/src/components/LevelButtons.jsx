import React from 'react';


const LevelButtons = ({ onClick, onBack }) => {
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
      <h2>How confident are you today? </h2>
      <div>
        <button onClick={handleEasyLevelClick}>EASY</button>
        <button style={mediumButtonStyle} onClick={handleMediumLevelClick}>MEDIUM</button>
        <button onClick={handleHardLevelClick}>HARD</button>
      </div>
      <button className='back-button' onClick={onBack}>{"< Back"}</button>
    </div>
  );
};


const mediumButtonStyle = {
  marginLeft: '20px',
  marginRight: '20px',
}

export default LevelButtons;