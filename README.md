# 🌍 Multilingual React App with i18n, Tailwind CSS 

This is a standalone multilingual React application using `react-i18next` for internationalization which is minimalist in nature. It supports **English** and **Korean** by default and is styled using **Tailwind CSS**.  

---

## Setup & Run Instructions

 1. Clone the repository

git clone https://github.com/your-username/i18n-app.git

cd i18n-app

 2. Install dependencies

npm install

 3. Start the development server

npm run dev

 4. Open in browser

Visit: http://localhost:5173

### Technical Decisions & Implementation

- Using react-i18next for Easy language detection and switching
- It is also Extensible for more languages
- Also used TailwindCSS for clean and fast styling 
- Tailwind also provides a consistent design system

 Features

- Live language switching (no page reload)
- Modern UI with soft gradients, responsive layout, and rounded corners
- Lightweight and fast loading
- Extensible: just drop a new translation file to add more languages

### Challenges & Improvements

Challenges Encountered
- Carefully ensuring i18next loads JSON files correctly from /public
- Handling fallback cases when switching languages too quickly
- Trying to maintain minimalism without making the UI feel plain

Possible Improvements
- Add dark mode toggle
- Add more dynamic UI elements to improve the styling
- Add more languages like French, Hindi, Japanese



