IntervAI

An AI-powered mock interview platform that helps candidates practice role-based interviews, receive AI-driven feedback, analyze performance, and track interview history.

🌐 Live Demo

Frontend: https://intervai-client-ts84.onrender.com
Backend API: https://intervai-k4hm.onrender.com

✨ Features

Google Authentication – Sign in using Google through Firebase Authentication.

Role & Experience Based Interviews – Configure interviews by job role, experience level, and interview type.

HR & Technical Modes – Choose between HR and Technical mock interviews.

Resume-Based Interviews – Upload a PDF resume and automatically extract role, experience, projects, and skills to personalize the interview.

AI Question Generation – Generates 5 interview questions with progressive difficulty based on the candidate profile and resume.

Voice-Based Interview – Questions are spoken using browser speech synthesis and candidate answers can be captured through browser speech recognition.

Timed Questions – Each generated question has its own time limit.

AI Answer Evaluation – Evaluates answers on confidence, communication, and correctness and provides concise feedback.

Performance Reports – View overall score, category-wise scores, performance trends, and question-wise feedback.

Interview History – Access previous interviews and open their reports.

PDF Reports – Download a detailed interview report as a PDF.

Credit System – Interviews consume credits, while users can purchase additional credits through Razorpay.

Razorpay Payments – Includes order creation and payment signature verification on the server.

Responsive UI – Built with React and Tailwind CSS with animations using Motion.

🛠️ Tech Stack

Frontend

React 19

Vite

React Router

Redux Toolkit / React Redux

Tailwind CSS

Motion

Axios

Recharts

React Icons

jsPDF + jsPDF AutoTable

Firebase Authentication

Backend

Node.js

Express 5

MongoDB

Mongoose

JWT

Cookie Parser

CORS

Multer

PDF.js

Axios

AI & Payments

OpenRouter API with openai/gpt-4o-mini

Razorpay Payment Gateway

🏗️ Project Structure

IntervAI/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AuthModel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Step1SetUp.jsx
│   │   │   ├── Step2Interview.jsx
│   │   │   ├── Step3Report.jsx
│   │   │   └── Timer.jsx
│   │   ├── pages/
│   │   │   ├── Auth.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── InterviewHistory.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   └── Pricing.jsx
│   │   ├── redux/
│   │   └── utils/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── public/
│   ├── index.js
│   └── package.json
│
└── .gitignore

🔄 How It Works

User Login
    ↓
Interview Setup
    ↓
(Optional) Upload Resume
    ↓
PDF Text Extraction
    ↓
AI Resume Analysis
    ↓
Generate 5 Personalized Questions
    ↓
Voice + Timed Interview
    ↓
Submit Answers
    ↓
AI Evaluation
    ↓
Performance Report
    ↓
Save to Interview History

💳 Credit System

Each interview requires 50 credits.

The current plans configured in the application are:

Plan

Price

Credits

Free

₹0

100

Starter Pack

₹100

150

Pro Pack

₹500

800

Users can purchase paid plans through Razorpay. Successful payments are verified on the backend using the Razorpay signature before credits are added to the user's account.

⚙️ Local Setup

1. Clone the repository

git clone https://github.com/tomarkartik910-max/IntervAI.git
cd IntervAI

2. Setup the backend

cd server
npm install

Create a .env file inside server/:

PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Start the backend:

npm run dev

The backend runs on:

http://localhost:8000

3. Setup the frontend

Open another terminal:

cd client
npm install

Create a .env file inside client/:

VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

Start the frontend:

npm run dev

The frontend runs on:

http://localhost:5173

🔐 Environment Variables

Variable

Location

Purpose

VITE_FIREBASE_APIKEY

client/.env

Firebase client configuration

VITE_RAZORPAY_KEY_ID

client/.env

Razorpay checkout key

PORT

server/.env

Backend server port

MONGODB_URL

server/.env

MongoDB connection string

JWT_SECRET

server/.env

JWT signing secret

OPENROUTER_API_KEY

server/.env

OpenRouter API authentication

RAZORPAY_KEY_ID

server/.env

Razorpay server key

RAZORPAY_KEY_SECRET

server/.env

Razorpay server secret

Important: Never commit .env files or secret API keys to GitHub.

🔌 API Overview

Authentication

POST /api/auth/google – Create/login a user through Google authentication.

GET /api/auth/logout – Clear the authentication cookie.

User

GET /api/user/current-user – Get the currently authenticated user.

Interviews

POST /api/interview/resume – Upload and analyze a PDF resume.

POST /api/interview/generate-questions – Generate a personalized interview.

POST /api/interview/submit-answer – Evaluate and store an answer.

POST /api/interview/finish – Complete an interview and calculate final scores.

GET /api/interview/get-interview – Get the user's interview history.

GET /api/interview/report/:id – Get a specific interview report.

Payments

POST /api/payment/order – Create a Razorpay order.

POST /api/payment/verify – Verify payment and add credits.

📊 Evaluation Metrics

Each answer is evaluated using three dimensions:

Confidence

Communication

Correctness

The final score for an answer is calculated as the average of these three scores. The interview report then calculates overall averages across all questions.

🚧 Current Limitations

The frontend and backend currently use localhost URLs for development.

Voice input depends on browser speech-recognition support.

Razorpay is currently configured from the application code using INR plans.

Production deployment will require updating CORS, frontend/backend URLs, and environment variables.

🔮 Future Improvements

WebSocket-based real-time human-to-human interviews

Live video interview support

Redis for caching and rate limiting

Dockerized deployment

Production cloud deployment

More detailed analytics and skill trends

Interview scheduling and interviewer dashboards

👨‍💻 Author

Kartik Tomar

GitHub: @tomarkartik910-max

Project: IntervAI
