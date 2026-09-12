# Task Manager REST API

A full-stack Task Manager application built with an Express.js backend and a vanilla JavaScript frontend. This project demonstrates a clean MVC architecture and a RESTful API.

## Features

- Full CRUD operations for tasks (Create, Read, Update, Delete)
- In-memory data storage
- MVC Architecture (Routes, Controllers, Services, Data)
- Custom Error Handling (400 and 404 status codes)
- CORS enabled for frontend-backend communication

## 🚀 Live Demo

- **Frontend:** [Task Manager](https://task-manager-api-1-jpaj.onrender.com/)
- **Backend API:** [Task Manager API](https://task-manager-api-8amx.onrender.com/api/tasks)

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get a single task by ID
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/:id` - Update a task (e.g., mark as completed)
- `DELETE /api/tasks/:id` - Delete a task

## Setup and Installation

1. Clone this repository to your local machine.
2. Navigate to the backend folder:
   ```bash
   cd backend
Install the dependencies:

```Bash
 npm install
```

Create a .env file in the backend folder and add the following:

Code snippet

PORT=5000

APP_NAME=TaskManagerAPI

Start the development server:

```Bash
 npm run dev
```
Open frontend/index.html in your web browser to use the application.
