# Japanese Language Learning Application

A full-stack web application designed for learning Japanese vocabulary with integrated database storage and performance tracking.

## About

This application allows users to build and manage their Japanese vocabulary by storing words with their English translations, reading types (hiragana/katakana), and contextual categories. The app tracks learning progress through accuracy metrics to help users focus on challenging vocabulary.

## Technologies Used

- React.js
- Firebase Firestore (database)
- JavaScript (ES6+)
- HTML5/CSS3

## Features

- Add Japanese vocabulary entries with English translations
- Support for multiple Japanese character types (hiragana, katakana, kanji)
- Categorization system for organizing vocabulary by context (conversation, grammar, etc.)
- Performance tracking with accuracy metrics (timesCorrect/timesIncorrect)
- Real-time data persistence and retrieval
- Learning status tracking for each word entry
- Timestamp tracking for vocabulary entries

## Data Model

Each vocabulary entry includes:
- Japanese characters
- English translation
- Reading type (hiragana/katakana)
- Category (conversation, grammar, etc.)
- Learning status
- Performance metrics (correct/incorrect counts)
- Timestamp

## Installation and Setup

Clone the repository:
```bash
git clone https://github.com/Jacobghg/Japanese-Word-App.git
cd Japanese-Word-App
```

Install dependencies:
```bash
npm install
```

Configure Firebase:
- Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
- Add your Firebase configuration to the project
- Enable Firestore Database in your Firebase console

Run the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## License

MIT License
