# Online Watch Shop (MERN Stack)

This is a modern e-commerce application for selling watches, built using the **MERN** stack (MongoDB, Express.js, React, Node.js).

## Project Structure
The project is split into two separate parts:
- `/frontend` - The React application (built with Vite & Tailwind CSS)
- `/backend` - The Node.js/Express REST API

---

## Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- A running [MongoDB](https://www.mongodb.com/) URL

### 1. Database Setup
1. Inside the `backend` folder, create a `.env` file.
2. Add your MongoDB connection string and a PORT:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
FRONTEND_URL=http://localhost:5173
```

### 2. Running the Backend
```bash
cd backend
npm install
npm run dev
```

### 3. Running the Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## Deployment (Render)

Since the frontend and backend are in separate folders, you will create **two separate Web Services** on Render from the same GitHub repository.

### Backend Deployment (Render Web Service)
1. **Build Command:** `npm install`
2. **Start Command:** `npm start`
3. **Root Directory:** `backend`
4. **Environment Variables:**
   - `MONGO_URI` (your MongoDB Atlas connection string)
   - `FRONTEND_URL` (the final URL of your deployed frontend)

### Frontend Deployment (Render Static Site or Web Service)
1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist`
3. **Root Directory:** `frontend`
4. **Environment Variables:**
   - Make sure your frontend fetches data using the deployed Backend URL! You might need to set an API base URL dynamically depending on how your frontend fetches data.
