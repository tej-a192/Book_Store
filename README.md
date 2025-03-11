# Book Store CRUD App

A simple **Book Store CRUD Application** built using **MERN Stack (MongoDB, Express.js, React, Node.js)**. It allows users to **Create, Read, Update, and Delete (CRUD)** book records.

## 🚀 Features
- 📌 Add new books
- 📌 View all books
- 📌 Edit book details
- 📌 Delete books
- 📌 User-friendly UI with **Tailwind CSS**

---

## 🛠️ Tech Stack

### **Frontend:**
- React.js
- Axios (for API requests)
- React Router
- Tailwind CSS

### **Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)
- CORS & dotenv

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/bookstore-crud.git
cd bookstore-crud
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```

#### Create a `.env` file inside `backend` folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

#### Start the Backend Server:
```sh
npm start
```

or use **nodemon**:
```sh
npx nodemon server.js
```

---

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
```

#### Start the React App:
```sh
npm run dev
```

---

## 📌 API Endpoints
| Method | Endpoint           | Description             |
|--------|-------------------|-------------------------|
| GET    | `/api/books`       | Get all books           |
| GET    | `/api/books/:id`   | Get a specific book     |
| POST   | `/api/books`       | Add a new book         |
| PUT    | `/api/books/:id`   | Update book details    |
| DELETE | `/api/books/:id`   | Delete a book          |

---

## 📌 Folder Structure
```
bookstore-crud/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── main.jsx
│   ├── public/
│── .gitignore
│── README.md
```

---

## 📌 Usage
1. Run **backend** and **frontend** as explained above.
2. Open `http://localhost:5173/` (or the port Vite runs on) in your browser.
3. Add, Edit, or Delete books as needed.

---

## 🛠️ Future Enhancements
✅ Add Authentication (JWT) 🔐  
✅ Implement Search and Filter 🔍  
✅ Deploy on Vercel & Render 🚀  

---

## 📌 Contributing
Pull requests are welcome! Feel free to **fork** and submit PRs. 😊

---

## 📌 License
This project is **open-source** and available under the **MIT License**.

---

🎉 **Happy Coding!** 🚀

