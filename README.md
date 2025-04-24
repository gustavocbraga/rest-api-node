# rest-api-node

This is a full-stack application for managing users, built with:

- **Backend:** Node.js (Express)
- **Frontend:** React
- **Database:** MongoDB

## Features

- Create new users
- Delete users
- View a list of users on the front-end interface

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

## Backend

### Setup

1. Navigate to the backend directory (API_node).
2. Install dependencies:

```bash
   npm install
```
3. Start the server in watch mode:

```bash
node --watch server.js
```
The backend will typically run on http://localhost:3000, unless configured differently.

## Frontend
### Setup
1. Navigate to the frontend directory (e.g. Frontend/).

2. Start the development server:
```bash
npm run dev
```
The frontend usually runs on http://localhost:5173 when using Vite.


## Configuration
Update your MongoDB connection string and any other environment variables. These can be stored in a .env file or directly configured in server.js.

Example:
```
MONGO_URI=mongodb://localhost:27017/user-management-db PORT=3000
```
