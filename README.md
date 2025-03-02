AI Notes - Speech & Text Note-Taking App

📌 Overview

AI Notes is a note-taking web application that supports text input, image notes, and speech recognition. It allows users to create, manage, and sort their notes efficiently, with features like:

🌍 Multi-language speech recognition

📋 Text & image note creation

🔍 Search & sorting (newest/oldest)

⭐ Favorites management

🎤 Voice-to-text transcription

📅 Date-based sorting & filtering

🚀 Features

Speech-to-Text: Uses the Web Speech API to transcribe notes in multiple languages.

Text Notes: Type notes manually with real-time saving.

Image Notes: Upload and store image-based notes.

Sorting & Filtering: Sort by newest or oldest and search by keywords.

Favorites: Mark important notes for quick access.

Modal View: View, edit, rename, copy, delete, and share notes.

Mobile Responsive: Optimized for all screen sizes.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS / Material UI

State Management: useState, useEffect

Date Handling: date-fns

Speech API: Browser Web Speech API

🏗️ Installation & Setup

Clone the repository:

git clone https://github.com/YOUR_GITHUB_USERNAME/AI-Notes.git

Navigate to the project directory:

cd AI-Notes

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and go to http://localhost:5173/ (for Vite users).

📂 Project Structure

AI-Notes/
├── src/
│   ├── Components/
│   │   ├── Notes.jsx
│   │   ├── Sort.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Home.jsx
│   │   ├── Favorite.jsx
│   ├── Context/
│   ├── Services/
│   ├── styles/
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
└── README.md

🗂️ Key Files & Their Purpose

Notes.jsx: Main component for displaying and managing notes.

Sort.jsx: Dropdown component for sorting notes.

SearchBar.jsx: Search functionality to filter notes.

AiNotes.jsx: Handles navigation, tabs, and main application logic.

Context/Context.js: Provides state management via React Context API.

🎤 Speech Recognition (Multi-Language Support)

The app allows users to transcribe speech in multiple languages, including:

🇺🇸 English (en-US)

🇪🇸 Spanish (es-ES)

🇫🇷 French (fr-FR)

🇩🇪 German (de-DE)

🇮🇳 Hindi (hi-IN)

🇮🇳 Telugu (te-IN)

🇮🇳 Tamil (ta-IN)

🇮🇳 Marathi (mr-IN)

🇨🇳 Chinese (zh-CN)

🇯🇵 Japanese (ja-JP)

🇦🇪 Arabic (ar-SA)

📩 Contact

For any issues or suggestions, reach out at mantenayamini7@gmail.com 