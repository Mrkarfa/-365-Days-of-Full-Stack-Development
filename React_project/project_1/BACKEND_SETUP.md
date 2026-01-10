# 🛠️ Backend Setup Guide: ChatFlow AI

This guide provides step-by-step instructions to configure the **Firebase** and **OpenAI** backend services required for the ChatFlow AI project.

---

## 🏗️ 1. Firebase Setup

Firebase handles User Authentication (Google Sign-In) and the Real-time Database (Firestore).

### Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** and give it a name (e.g., `ChatFlow-AI`).

### Step 2: Enable Google Authentication

1. In the left sidebar, go to **Build** → **Authentication**.
2. Click **Get Started**.
3. Under **Sign-in method**, select **Google**.
4. Enable the toggle and select a **Project support email**.
5. Click **Save**.

### Step 3: Create Firestore Database

1. Go to **Build** → **Firestore Database**.
2. Click **Create database**.
3. Choose a location and select **Start in production mode** (or test mode if you want to skip security rules for now).
4. Click **Create**.

### Step 4: Register your Web App

1. Go to **Project Settings** (gear icon) → **General**.
2. Under **Your apps**, click the `</>` (Web) icon.
3. Register your app (e.g., `ChatFlow-Web`).
4. **Copy the `firebaseConfig` object.** It looks like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "...",
   };
   ```

---

## 🤖 2. OpenAI Setup

OpenAI powers the AI Assistant, Smart Replies, and Summarization features.

1. Go to the [OpenAI Platform](https://platform.openai.com/).
2. Navigate to **API Keys** in the left sidebar.
3. Click **Create new secret key** and give it a name.
4. **Copy the key immediately** (you won't be able to see it again).

---

## 📄 3. Environment Configuration

Now, glue everything together by filling in your `.env` file.

1. In the project root, create a file named `.env` (or copy `.env.example`).
2. Paste your keys into the respective variables:

```env
# Firebase Credentials (from firebaseConfig)
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# OpenAI Secret Key
VITE_OPENAI_API_KEY=sk-your_openai_secret_key
```

---

## 🔒 4. Firestore Security Rules (Recommended)

To protect your data, go to **Firestore** → **Rules** and paste these basic rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /chats/{chatId} {
      allow read, write: if request.auth != null && request.auth.uid in resource.data.participants;

      match /messages/{messageId} {
        allow read, write: if request.auth != null;
      }
    }
  }
}
```

---

## 🚀 Final Steps

1. Restart your development server: `npm run dev`
2. Open the app and click **Initiate Google Auth**.
3. Your user document will be automatically created in the `users` collection upon first login!
