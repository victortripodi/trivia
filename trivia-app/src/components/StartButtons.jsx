import React, { useState } from 'react';

const StartButtons = ({ onClick }) => {
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const handleOnePlayerClick = () => {
    onClick(1);
    console.log('One Player button clicked');
  };

  const handleTwoPlayersClick = () => {
    setShowUnderConstruction(true);
    console.log('Two Players button clicked');
  };

  return (
    <div>
      <button onClick={handleOnePlayerClick}>One Player</button>
      <button onClick={handleTwoPlayersClick}>Two Players</button>
      {showUnderConstruction && (
        <div>
          <h2>Site Under Construction</h2>
          <p>We are currently working on the feature for two players.</p>
          <img src="" alt="Under construction" />
        </div>
      )}
    </div>
  );
};

export default StartButtons;
