# Subdub Frontend

The **Subdub Frontend** is a minimal web client built to demonstrate the functionality of the Subdub backend API. It provides a simple interface for user authentication and subscription management, without any production-grade styling or complex UX.

## 🚀 Features

- **User Authentication**
    - Sign up / Sign in with username & password
    - OAuth2 login (e.g. Google, GitHub)
- **Subscription Management**
    - List your current subscriptions
    - Add new subscriptions
    - Edit or delete existing subscriptions
- **Expiry Notifications**
    - View which subscriptions are expiring soon
    - (Backend-driven) Email reminder simulation in the UI logs

## 🏗️ Tech Stack

- **Framework:** React (via Vite)
- **HTTP Client:** Axios (or Fetch API)
- **Styling:** Tailwind CSS (optional)
- **State:** React Context (or useState / useReducer)

## 📝 Notes

- This UI is for demonstration only.

- No production-grade error handling, form validation, or design polish.

- Focus is purely on exercising the backend endpoints.

## 🤝 Related

- **Subdub Backend:** https://github.com/yourusername/subdub-backend
