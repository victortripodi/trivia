import React from 'react';

const StartButtons = ({ onClick }) => {
  const handleOnePlayerClick = () => {
    onClick(1)
    console.log('One Player button clicked');
  };

  const handleTwoPlayersClick = () => {
    onClick(2)
    console.log('Two Players button clicked');
  };

  return (
    <div>
      <button onClick={handleOnePlayerClick}>One Player</button>
      <button onClick={handleTwoPlayersClick}>Two Players</button>
    </div>
  );
};


export default StartButtons;