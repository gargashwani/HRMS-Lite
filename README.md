# HRMS Lite

## Project Overview

HRMS Lite is a lightweight Human Resource Management System designed to manage basic HR operations within an organization.
The application allows an admin to manage employee records and track daily attendance.

The system provides a simple and professional interface where an administrator can:

* Add new employees
* View all employee records
* Delete employees
* Mark employee attendance
* View attendance records per employee

This project demonstrates full-stack development skills including backend API development, database persistence, frontend UI development, validation, and deployment.

---

## Tech Stack Used

### Frontend

* React (Vite)
* Axios
* JavaScript
* HTML/CSS

### Backend

* FastAPI (Python)
* SQLAlchemy

### Database

* SQLite

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Features

### Employee Management

* Add new employee
* View employee list
* Delete employee

### Attendance Management

* Mark employee attendance (Present / Absent)
* View attendance records for employees

### Backend Features

* RESTful APIs
* Input validation
* Duplicate employee prevention
* Proper HTTP status codes
* Error handling

---

## Steps to Run the Project Locally

### 1. Clone the Repository

```
git clone https://github.com/your-username/hrms-lite.git
cd hrms-lite
```

---

### 2. Run Backend (FastAPI)

Navigate to backend directory:

```
cd backend
```

Create virtual environment:

```
python -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```
pip install -r requirements.txt
```

Run server:

```
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

API documentation:

```
http://127.0.0.1:8000/docs
```

---

### 3. Run Frontend (React)

Navigate to frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## Assumptions and Limitations

* The system assumes a **single admin user**, so authentication is not implemented.
* Employee updates and advanced HR features such as payroll, leave management, or role management are out of scope.
* SQLite is used for simplicity in this assignment but can easily be replaced with PostgreSQL or MySQL in production environments.
* The application focuses on core functionality rather than advanced UI features.

---

## Live Application

Frontend URL:
[(Insert Vercel link)](https://hrms-lite-q9o8dbhtt-ashwani-gargs-projects.vercel.app/)

Backend API:
[(Insert Render link)](https://hrms-lite-60vd.onrender.com/)

---
