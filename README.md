# Talent IQ 🎯

Talent IQ is a full-stack interview platform designed to help candidates and interviewers conduct technical interviews through a modern web application.

The platform provides authentication, interview sessions, real-time communication, coding/interview workflows, and backend event processing.

![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![React](https://img.shields.io/badge/frontend-React%20%2B%20Vite-61DAFB)
![Backend](https://img.shields.io/badge/backend-Node%20%2B%20Express-339933)

## 🚀 Features

* 🔐 Secure authentication with Clerk
* 👤 User profile and account management
* 🎤 Technical interview sessions
* 💬 Real-time communication using Stream
* 🧑‍💻 Interview-focused workflow
* 📊 Interview session management
* ⚡ Backend event handling with Inngest
* 🍃 MongoDB database integration
* 🌐 Full-stack React + Node.js architecture
* 📱 Responsive and modern user interface

## 🛠️ Tech Stack

| Layer    | Technologies                                                                      |
| -------- | --------------------------------------------------------------------------------- |
| Frontend | React, Vite, JavaScript, Tailwind CSS, Clerk, Stream Chat, Axios, React Hot Toast |
| Backend  | Node.js, Express.js, MongoDB, Mongoose, Clerk Express, Stream, Inngest, dotenv    |

## 📋 Prerequisites

Before you begin, make sure you have:

* **Node.js** v18 or later
* **npm** (comes with Node.js)
* A **MongoDB** instance — either a local install or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
* Accounts and API keys for:

  * [Clerk](https://clerk.com/) (authentication)
  * [Stream](https://getstream.io/) (real-time communication)
  * [Inngest](https://www.inngest.com/) (event-driven workflows)

## 📁 Project Structure

```text
Talent-Interview/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── api/
│   │   └── lib/
│   └── package.json
│
├── package.json
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Talent-Interview
```

### 2. Install dependencies

Install the backend dependencies:

```bash
cd backend
npm install
```

Then install the frontend dependencies:

```bash
cd ../frontend
npm install
```

### 3. Set up MongoDB

Use either:

* A local MongoDB instance (default connection string: `mongodb://localhost:27017/talent-iq`), or
* A free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas) — copy the provided connection string into `MONGO_URI`.

## 🔑 Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

```env
PORT=3000
NODE_ENV=development

MONGO_URI=your_mongodb_connection_string

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

Create a `.env` file inside the `frontend` directory for the frontend-specific environment variables.

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
VITE_API_URL=http://localhost:3000
```

> Never commit your `.env` files or secret API keys to GitHub.

## ▶️ Running the Application

### Start the Backend

```bash
cd backend
npm run dev
```

The backend server will run on:

```text
http://localhost:3000
```

### Start the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Vite will provide the local frontend URL in the terminal, usually:

```text
http://localhost:5173
```

## 📜 Available Scripts

### Backend (`/backend`)

| Script        | Description                                           |
| ------------- | ----------------------------------------------------- |
| `npm run dev` | Start the backend in development mode with hot reload |
| `npm start`   | Start the backend in production mode                  |

### Frontend (`/frontend`)

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Build the frontend for production    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run linting checks                   |

> Update these tables if your actual `package.json` scripts differ.

## 🔄 Application Architecture

The application follows a client-server architecture. The backend is the single point of contact for the frontend and communicates independently with each service:

```text
                 ┌─────────────────┐
                 │     Frontend    │
                 │ React + Vite    │
                 └────────┬────────┘
                          │
                          │ REST API
                          ▼
                 ┌──────────────────────┐
                 │       Backend        │
                 │   Node + Express     │
                 └──┬─────────┬──────┬──┘
                    │         │      │
                    ▼         ▼      ▼
             ┌──────────┐ ┌───────┐ ┌──────────┐
             │ MongoDB  │ │ Clerk │ │  Stream  │
             │ Database │ │ Auth  │ │Real-time │
             └──────────┘ └───────┘ └──────────┘
                    │
                    ▼
             ┌──────────┐
             │ Inngest  │
             │  Events  │
             └──────────┘
```

## 🔐 Authentication

Talent IQ uses Clerk for authentication.

The backend protects private routes using Clerk authentication middleware and verifies the authenticated user's identity before allowing access to protected resources.

## 💬 Real-Time Communication

Stream is used to provide real-time communication capabilities for interview sessions.

The application initializes the Stream client for authenticated users and manages the client connection during the user's session.

## 🗄️ Database

MongoDB is used as the primary database.

Mongoose is used on the backend to define schemas and interact with MongoDB.

## ⚡ Inngest

Inngest is used for event-driven backend workflows.

It allows backend operations to be handled asynchronously and reliably without tightly coupling every operation to a single HTTP request.

## 📡 API Overview

The backend provides REST API endpoints for authentication, users, interviews, and related application functionality.

| Method | Endpoint              | Description                    | Auth Required |
| ------ | --------------------- | ------------------------------ | ------------- |
| `POST` | `/api/users`          | Create/sync a user profile     | ✅             |
| `GET`  | `/api/users/:id`      | Get user profile               | ✅             |
| `POST` | `/api/interviews`     | Create a new interview session | ✅             |
| `GET`  | `/api/interviews/:id` | Get interview session details  | ✅             |
| `GET`  | `/api/interviews`     | List interview sessions        | ✅             |

> Update the API endpoints above according to the actual routes implemented in the backend.

## 📸 Screenshots

Add screenshots or a demo GIF of the dashboard, interview room, and session management views here.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 🚧 Future Improvements

* Interview analytics and performance reports
* Advanced coding challenges
* AI-powered interview feedback
* Interview recording
* Improved interviewer dashboard
* Candidate performance tracking
* More real-time collaboration features

## 👨‍💻 Author

**Mitesh Khalasi**

Built as a full-stack interview platform project while learning and implementing modern web development technologies.

* GitHub: [@your-github-handle](https://github.com/your-github-handle)
* LinkedIn: [your-linkedin-handle](https://linkedin.com/in/your-linkedin-handle)

---

⭐ If you find this project useful, consider giving the repository a star!
