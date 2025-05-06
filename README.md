# ✅ Task Management System

A robust 🧰 **Task Management System** built for small teams to streamline task creation, assignment, tracking, and collaboration — designed with **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 📌 Assignment Overview

Build a fully functional, collaborative Task Management System enabling users to:

- 📝 Create, assign, and manage tasks
- 🧑‍🤝‍🧑 Collaborate as a team
- 📊 Monitor progress via dashboards
- 🧠 Leverage advanced features like RBAC, real-time notifications, and offline support

---

## 🧹 Core Features

### 🔐 User Authentication
- Secure user **registration and login**
- Passwords stored securely using industry standards (bcrypt)
- Session or token-based authentication (JWT)

### 📋 Task Management
- Full **CRUD** for tasks
- Task attributes:  
  - `Title` 📝  
  - `Description` 📃  
  - `Due Date` 📅  
  - `Priority` ⏫  
  - `Status` 📌

### 👥 Team Collaboration
- Assign tasks to other registered users
- Notification alerts on assignment 🔔

### 🧾 Dashboard
- View:
  - Tasks **assigned to the user**  
  - Tasks **created by the user**  
  - **Overdue** tasks ⏰

### 🔍 Search & Filter
- Search tasks by **title or description**
- Filter by:
  - `Status` 🎯  
  - `Priority` 🚦  
  - `Due Date` 📆

---

## ⚙️ Tech Stack

| Layer      | Tech                    |
|------------|-------------------------|
| 🎨 Frontend | React.js, React Router |
| 🧠 Backend  | Node.js, Express.js     |
| 🗄️ Database | MongoDB, Mongoose       |
| 🍪 Auth     | JWT, Bcrypt, Cookies    |

---

## 🚀 Advanced Features

### 🛡️ Role-Based Access Control (RBAC)
- `Admin`: Manage users and tasks  
- `Manager`: Assign tasks, view reports  
- `User`: Create and update own tasks  

### 🔄 Real-Time Notifications
- Powered by **Socket.io**
- Notify users of:
  - New assignments
  - Task updates or status changes

### 🔁 Recurring Tasks
- Repeat tasks:
  - Daily 📅  
  - Weekly 📆  
  - Monthly 🗓️

### 📜 Audit Logging
- Track all actions:
  - Created, assigned, updated, or deleted tasks
- Ensure transparency and accountability

### 🌐 Offline Support (PWA)
- Works without internet 🚫🌐
- Syncs data when reconnected

### ✅ Testing
- **Unit & Integration** tests using:
  - `Jest` or `Mocha`
- Covers:
  - Auth
  - CRUD
  - Role permissions
  - Notifications

### 📈 Analytics Dashboard
- Visualize:
  - ✅ Completed tasks per user  
  - ⏳ Overdue trends  
  - 📉 Task completion rates

### 🔔 Customizable Notifications
- User preferences for:
  - Email 📧  
  - In-app 🔔  
  - Mute/unmute 🔇

---

## 📁 Folder Structure

```bash
root/
├── client/         # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── App.js
├── server/         # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
