# Trivia App

## Overview

The Trivia App is an engaging and interactive quiz game built using React. It allows players to test their knowledge on various topics by answering multiple-choice questions fetched from the Open Trivia Database API. The app provides different levels of difficulty and a variety of categories to choose from.

## Features

- **Single Player Mode**: Currently supports only a single player mode where one user can play.
- **Difficulty Levels**: Users can choose from three difficulty levels - Easy, Medium, and Hard.
- **Categories**: A wide range of trivia categories to choose from, such as General Knowledge, Books, Films, Video Games, Geography, and History.
- **Scoring**: Keeps track of the user's score and provides feedback after each question.
- **Results**: Displays the final score and a message based on the user's performance.
- **Restart**: Option to restart the quiz at any time.

## Components

### `App.js`

This is the main component that manages the overall state of the app. It uses various states to track the number of players, selected difficulty level, and category. It renders different components based on the current state.

### `StartButtons.js`

This component allows the user to select the number of players. Currently, only the one-player mode is implemented. It displays a message for the two-player mode indicating that the feature is under construction.

### `LevelButtons.js`

This component lets the user select the difficulty level for the trivia questions. The options are Easy, Medium, and Hard.

### `CategoriesButtons.js`

This component allows the user to choose a category for the trivia questions. It provides buttons for various categories like General Knowledge, Books, Films, Video Games, Geography, and History.

### `Questions.js`

This component handles fetching trivia questions from the Open Trivia Database API based on the selected difficulty level and category. It manages the state for current questions, user answers, score, and displays the questions and results. It also provides the option to move to the next question or restart the quiz.

## CSS

The app uses custom CSS files for styling the components, ensuring a consistent and visually appealing user interface using an existing template
Source: 
General [Zell Liew](https://codepen.io/zellwk) on [CodePen](https://codepen.io/).
Loading https://codepen.io/Chokcoco/pen/OJgdRPm