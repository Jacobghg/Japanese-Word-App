# Japanese Language Learning Application

A full-stack web application designed for learning Japanese vocabulary with integrated database storage and performance tracking.

## Live Demo

**Note:** This project requires Firebase configuration. See setup instructions below.

## About

This application allows users to build and manage their Japanese vocabulary by storing words with their English translations, reading types (hiragana/katakana), and contextual categories. The app tracks learning progress through accuracy metrics to help users focus on challenging vocabulary.

## Technologies Used

- **Frontend:** React.js, JavaScript (ES6+), HTML5/CSS3
- **Backend:** Firebase Firestore (NoSQL database)
- **Authentication:** Firebase Auth (if applicable)
- **Hosting:** Firebase Hosting (if deployed)

## Features

- Add Japanese vocabulary entries with English translations
- Support for multiple Japanese character types (hiragana, katakana, kanji)
- Categorization system for organizing vocabulary by context (conversation, grammar, etc.)
- Performance tracking with accuracy metrics (timesCorrect/timesIncorrect)
- Real-time data persistence and retrieval
- Learning status tracking for each word entry
- Timestamp tracking for vocabulary entries

## Screenshots

*Add screenshots of your application here to show what it looks like*

## Data Model

Each vocabulary entry includes:
- Japanese characters
- English translation
- Reading type (hiragana/katakana)
- Category (conversation, grammar, etc.)
- Learning status
- Performance metrics (correct/incorrect counts)
- Timestamp

## Project Structure
```
Japanese-Word-App/
├── public/
├── src/
│   ├── components/     # React components
│   ├── firebase/       # Firebase configuration
│   ├── App.js         # Main application component
│   └── index.js       # Application entry point
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Steps

1. Clone the repository:
```bash
git clone https://github.com/Jacobghg/Japanese-Word-App.git
cd Japanese-Word-App
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firestore Database in your Firebase console
   - Copy your Firebase configuration
   - Create a `.env` file in the root directory:
```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Future Enhancements

- Quiz mode for testing vocabulary knowledge
- Spaced repetition algorithm for optimal learning
- Audio pronunciation support
- Export/import vocabulary lists
- Progress visualization with charts

## Learning Motivation

This project was built to support my Japanese language learning journey while demonstrating full-stack development skills with React and Firebase. Taking the JLPT N5 exam in December 2025.

## License

MIT License

## Contact

Jacob Giangiulio - [GitHub](https://github.com/Jacobghg) - [LinkedIn](https://linkedin.com/in/jacob-giangiulio)
