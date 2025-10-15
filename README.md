# 🔐 Simple Login System

A lightweight **Login System** built using **HTML**, **CSS**, and **JavaScript** — without any backend or API.  
It securely stores user credentials using the browser’s **localStorage** and validates login information on the client side.  

---

## ✨ Features

- 🧍‍♂️ User registration and login system  
- 💾 Stores user data (username & password) in **localStorage**  
- ✅ Validates login credentials directly from stored data  
- ⚙️ No server or API required — works completely offline  
- 🎨 Clean and responsive UI made with HTML & CSS  

---

## 🧠 Technologies Used

| Technology | Description |
|-------------|-------------|
| 💻 **HTML5** | Structure and layout |
| 🎨 **CSS3** | Styling and design |
| ⚡ **JavaScript (ES6)** | Logic for registration, login, and data handling |
| 🗄️ **localStorage** | Saves and retrieves user credentials locally |

---

## 📸 Preview

![Website Screenshot](./images/screenshot.png)

> *(Add a screenshot of your login page — put the image inside an `images` folder in your repo and name it `screenshot.png`)*  

---

## 🧩 How It Works

1. 📝 **Register a new user**  
   - User enters a username and password  
   - Data is saved in `localStorage` using  
     ```js
     localStorage.setItem('username', enteredUsername);
     localStorage.setItem('password', enteredPassword);
     ```

2. 🔑 **Login**  
   - User enters credentials  
   - JavaScript checks them with  
     ```js
     localStorage.getItem('username')
     localStorage.getItem('password')
     ```
   - If they match, the user is logged in successfully 🎉  

3. 🚪 **Logout (Optional)**  
   - You can clear data with:  
     ```js
     localStorage.removeItem('username');
     localStorage.removeItem('password');
     ```

---

## ⚙️ How to Run Locally

   ```bash
1. *Clone the repository*:
   git clone https://github.com/alaamarey/LogIn-System.git

2. *Open the folder*:
    cd Login-System

3.Open index.html directly in your browser — no server needed.

