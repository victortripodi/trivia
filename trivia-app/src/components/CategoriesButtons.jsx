import React from 'react';


const CategoriesButtons = ({ onClick, onBack }) => {
  const handleGeneralKnowledgeClick = () => {
    onClick(9) //ID of the category
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
      <h2>Select the category</h2>
      <div className='grid-container'>
        <button className='grid-item' onClick={handleGeneralKnowledgeClick}>General Knowledge</button>
        <button className='grid-item' onClick={handleBooksClick}>Books</button>
        <button className='grid-item' onClick={handleFilmsClick}>Film</button>
        <button className='grid-item' onClick={handleVideoGamesClick}>Video Games</button>
        <button className='grid-item' onClick={handleGeographyClick}>Geography</button>
        <button className='grid-item' onClick={handleHistoryClick}>History</button>
      </div>
      <button className="back-button" onClick={onBack}>{"< Back"}</button>
    </div>
  );
};


export default CategoriesButtons;