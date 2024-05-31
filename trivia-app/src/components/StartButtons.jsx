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
    <div style={containerStyle}>
      <button  style={firstBtnStyle} onClick={handleOnePlayerClick}><span className="text">ONE PLAYER</span></button>
      <button  onClick={handleTwoPlayersClick}><span className="text">TWO PLAYERS</span></button>
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

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const firstBtnStyle = {
  marginBottom: '30px',
  marginTop: '30px'
}

export default StartButtons;
