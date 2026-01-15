[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# OBS Frontend Assignment – User Management App

This project is a simple user management application built as part of the OBS Frontend Assignment.  
This application demonstrates best practices in **state management, component architecture, UI responsiveness, and frontend testing**.

## 🔗 Live Demo & Repository

- **Live Demo:** https://user-management-app-ff037.web.app
- **GitHub Repository:** https://github.com/andisobandi/user-management-web

## 🧩 Application Overview

The application displays a list of users with profile images, allows viewing user details in a modal, and supports **CRUD operations (Create, Read, Update, Delete)** using centralized state management.

All data modifications are handled locally through React Context without backend persistence, as per assignment requirements.

## ✨ Key Features

- Display user list with profile pictures
- View user details in a modal
- Add new user
- Edit existing user
- Delete user
- Centralized state management using React Context
- Unit tests using React Testing Library

## 🛠 Tech Stack

- React
- ArkUI
- React Context + useReducer
- Axios
- React Testing Library
- ESLint & Prettier
- TailwindCSS
- React Hook Form
- Tanstack Query

## 🌐 Data Source

- User data is fetched from:  
  https://jsonplaceholder.typicode.com/users
- Profile images are generated using:  
  https://picsum.photos

> Note: Add, edit, and delete operations only update the local state (no API persistence required).

## ▶️ Getting Started

### 1. Clone repository

```bash
git clone https://github.com/andisobandi/user-management-web
cd user-management-web
```

### 2. Install dependencies

```bash
npm run install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will run on: http://localhost:4010

## Run Unit Tests

```bash
npm run test
```

## Linting & Formatting

```bash
npm run lint
```

## Build for Production

### 1. Build application

```bash
npm run build
```

### 2. Run Production Server

```bash
npm run start
```

The app will run on: http://localhost:4010

## Deployment

The application is deployed using Firebase Hosting and CircleCI for easy CI/CD and live preview.

## Author

- Name: Andi Sobandi
- Role: Frontend Developer
- GitHub: https://github.com/andisobandi
