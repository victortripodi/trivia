import React from 'react';

const CategoriesButtons = ({onClick}) => {
  const handleGeneralKnowledgeClick = () => {
    onClick(9) //id of the category
    console.log('General Knowledge button clicked');
  };

  const handleBooksClick = () => {
    onClick(10)
    console.log('Books button clicked');
  };

  const handleFilmsClick = () => {
    onClick(11)
    console.log('Film button clicked');
  };

  const handleVideoGamesClick = () => {
    onClick(15)
    console.log('Video Games button clicked');
  };

  const handleGeographyClick = () => {
    onClick(22)
    console.log('Geography button clicked');
  };

  const handleHistoryClick = () => {
    onClick(23)
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