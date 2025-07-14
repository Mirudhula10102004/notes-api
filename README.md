# 📝 Notes API - Node.js + Express

This is a simple **RESTful API** built using **Node.js** and **Express.js** to manage a list of notes. It supports full CRUD operations and is deployed live using **Render**.

> 🔗 Live URL: [https://notes-api-pab1.onrender.com](https://notes-api-pab1.onrender.com)

---

## 📌 Features

- View all notes (`GET /notes`)
- Add a new note (`POST /notes`)
- Get a specific note by ID (`GET /notes/:id`)
- Update a note by ID (`PUT /notes/:id`)
- Delete a note by ID (`DELETE /notes/:id`)

Each note contains:
- `id`: Unique identifier
- `title`: Note title (string)
- `content`: Note content (string)
- `createdAt`: Timestamp when created

---

## 🚀 Getting Started Locally

### 1. Clone the repo

git clone https://github.com/Mirudhula10102004/notes-api.git
cd notes-api

### 2. Install dependencies

npm install

3. Run the server

node index.js
Server runs at: http://localhost:3000
