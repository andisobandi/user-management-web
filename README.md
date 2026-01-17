[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Node](https://img.shields.io/badge/node-%3E%3D18-green)

## 🔗 Live Demo & Repository

- **Live Demo:** https://user-management-app-ff037.web.app
- **GitHub Repository:** https://github.com/andisobandi/user-management-web

## 🧩 Overview

This project is a simple user management application built as part of Frontend Assignment.
The application displays a list of users with profile images, allows viewing user details in a modal, and supports **CRUD operations (Create, Read, Update, Delete)** using centralized state management.

> Note: Add, edit, and delete operations only update the local state (no API persistence required).

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
- Ark UI (Headless UI components)
- React Context + useReducer
- React Testing Library
- ESLint & Prettier
- TailwindCSS
- React Hook Form

## ▶️ Getting Started

### 1. Clone repository

```bash
git clone https://github.com/andisobandi/user-management-web
cd user-management-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The app will run on: http://localhost:4010

## Run Unit Tests

```bash
npm run test
```

To generate a test coverage report, run:

```bash
npm run test:coverage
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
