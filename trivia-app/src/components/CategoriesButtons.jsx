import React from 'react';

const CategoriesButtons = ({onClick}) => {
  const handleGeneralKnowledgeClick = () => {
    onClick('GenealKnowLedge')
    console.log('General Knowledge button clicked');
  };

  const handleBooksClick = () => {
    onClick('Books')
    console.log('Books button clicked');
  };

  const handleFilmsClick = () => {
    onClick('Films')
    console.log('Film button clicked');
  };

  const handleVideoGamesClick = () => {
    onClick('Video Games')
    console.log('Video Games button clicked');
  };

  const handleGeographyClick = () => {
    onClick('Geography')
    console.log('Geography button clicked');
  };

  const handleHistoryClick = () => {
    onClick('History')
    console.log('History button clicked');
  };

  return (
    <div>
      <button onClick={handleGeneralKnowledgeClick}>General Knowledge</button>
      <button onClick={handleBooksClick}>Books</button>
      <button onClick={handleFilmsClick}>Film</button>
      <button onClick={handleVideoGamesClick}>Video Games</button>
      <button onClick={handleGeographyClick}>Geography</button>
      <button onClick={handleHistoryClick}>History</button>

    </div>
  );
};


export default CategoriesButtons;