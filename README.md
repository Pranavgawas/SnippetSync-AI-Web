# SnippetSyncAi 🚀
> **Private by Default, Powerful in the Cloud.**

SnippetSyncAi is a productivity-focused **Smart Clipboard & Text Expander** designed for developers, sales professionals, and power users. It helps you type less and do more by instantly expanding short abbreviations into full templates, code blocks, or email responses.

---

## 🌟 Core Philosophy: Local-First
We believe your text data is personal. 
*   **Offline First:** All your snippets are stored locally on your device (Chrome Storage).
*   **Privacy Focused:** We don't track your keystrokes or read your browsing history.
*   **Cloud Optional:** Sync and Community features are strictly opt-in.

---

## 🔥 Key Features

### 1. ⚡ The Chrome Extension
The heart of the productivity workflow.
*   **Text Expansion:** Type `/email` -> Instantly expands to your full email signature.
*   **Dynamic Placeholders:** Use variables like `{cursor}` or `{date}` in your templates.
*   **Rich Categories:** Organize snippets into Engineering, Sales, Personal, etc.
*   **Dark Mode UI:** A beautiful, developer-friendly interface (Slate/Violet theme).
*   **Pro License:** Unlock unlimited storage and cloud capabilities.

### 2. 🌍 The Website & Community Hub
The operational center for your account.
*   **Community Hub:** Discover and install public snippet packs (e.g., "React Hooks", "Cold Email Templates").
*   **Cloud Sync (Firebase):** Securely backup your local snippets to the cloud and sync across devices.
*   **Authentication:** Secure Login/Signup via Email or Google.
*   **Interactive Demo:** Try the expansion engine directly on the landing page.

---

## 🛠 Tech Stack

### Web Platform
*   **Frontend:** HTML5, Modern CSS3 (Variables, Flexbox/Grid), Vanilla JavaScript (ES6+).
*   **Auth & Backend:** Google Firebase (Authentication, Firestore).
*   **Design System:** Custom Dark Mode theme (`#0f172a` bg, `#8b5cf6` primary).

### Extension (Planned/Implemented)
*   **Manifest V3:** Future-proof Chrome Extension architecture.
*   **Storage API:** `chrome.storage.local` for offline speed.
*   **Content Scripts:** Lightweight DOM observation for text expansion logic.

---

## 📂 Project Structure

```
SnippetSync-AI-Web/
├── snippetsyncai-website/       # Landing Page & Web App
│   ├── index.html               # Main Landing Page
│   ├── community.html           # Community Snippet Store (App)
│   ├── login.html / signup.html # Auth Pages
│   ├── firebase-config.js       # Firebase SDK Setup
│   ├── style.css                # Global Dark Mode Styles
│   └── script.js                # Landing Page Interactions
└── README.md                    # This Documentation
```

---

## 🚀 Getting Started

1.  **Visit the Website:** [https://snippetsync-ai-web-22477-cf36a.web.app/](https://snippetsync-ai-web-22477-cf36a.web.app/)
2.  **Create an Account:** Sign up to access the Community Hub.
3.  **Install the Extension:** (Coming Soon to Chrome Web Store).
4.  **Start Typing:** Use `/` shortcuts to fly through your work!

---

## 📄 License & Privacy
*   **Privacy Policy:** We are transparent about data. Local storage is default. Cloud data is encrypted.
*   **Terms:** Use responsibly. Do not publish sensitive data to the public community.
