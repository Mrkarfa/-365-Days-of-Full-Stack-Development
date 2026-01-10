# ChatFlow AI - Real-time Chat Application

A modern, minimal real-time chat application built with React, Firebase, and OpenAI integration featuring award-worthy GSAP animations.

![ChatFlow AI](https://img.shields.io/badge/ChatFlow-AI%20Powered-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-10-FFCA28?style=flat-square&logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🔐 **Google Authentication** - Seamless sign-in with Google
- 💬 **Real-time Messaging** - Instant message delivery powered by Firebase
- 🤖 **AI Assistant** - Chat with an AI powered by OpenAI GPT
- 💡 **Smart Replies** - AI-generated reply suggestions
- 🎨 **Dark Theme** - Beautiful minimal dark UI with glass morphism
- ✨ **GSAP Animations** - Smooth, award-worthy animations
- 📱 **Responsive Design** - Works perfectly on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project (free tier works)
- OpenAI API key

### Installation

1. **Clone and install dependencies:**

   ```bash
   cd React_project/project_1
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your Firebase and OpenAI credentials.

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open** http://localhost:5173 in your browser

## 🔧 Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable **Authentication** → Sign-in method → Google
4. Create a **Firestore Database**
5. Copy your config to `.env`

### OpenAI Setup

1. Get your API key from [OpenAI Platform](https://platform.openai.com)
2. Add it to `.env` as `VITE_OPENAI_API_KEY`

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth/          # Login, UserProfile
│   ├── Chat/          # ChatWindow, Messages, Input
│   └── Layout/        # Sidebar, Header
├── context/           # AuthContext
├── hooks/             # useChat, useAI
├── services/          # Firebase, OpenAI
├── animations/        # GSAP animations
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠️ Tech Stack

- **Frontend:** React 18, Tailwind CSS
- **Backend:** Firebase (Auth + Firestore)
- **AI:** OpenAI GPT-3.5
- **Animations:** GSAP
- **Icons:** Lucide React
- **Build:** Vite

## 📸 Screenshots

### Login Page

Beautiful animated login with glass morphism card and floating gradient orbs.

### Chat Interface

Clean minimal chat with message bubbles, typing indicators, and smooth animations.

### AI Assistant

Chat with AI for help, get smart reply suggestions.

## 📝 License

MIT License - feel free to use this project for learning or personal use.

---

Built with ❤️ using React, Firebase, and OpenAI
