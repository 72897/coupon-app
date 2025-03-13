# 🎟️ Round-Robin Coupon Distribution (Internship Assignment)

## 🚀 Live Demo
🔗 [View Live App](https://coupon-frontend-five.vercel.app/)

---

## 📚 Overview

This project is a **Round-Robin Coupon Distribution System** that ensures fair distribution of coupons to users while preventing abuse. Users can claim a coupon without logging in, and abuse prevention mechanisms (IP & Cookie tracking) prevent multiple claims within a restricted time frame.

---

## 🛠️ Features

✅ **Round-Robin Coupon Assignment** – Ensures fair distribution  
✅ **Guest Access** – No login required  
✅ **Abuse Prevention** – Restricts claims via IP & Cookie tracking  
✅ **Cooldown Timer** – Displays time left before next claim  
✅ **Interactive UI** – Smooth animations & error handling  
✅ **Live Deployment** – Hosted for real-world testing  

---

![alt text](image.png)
## 🏢 Tech Stack

**Frontend:** React, Tailwind CSS, Framer Motion  
**Backend:** Node.js, Express, MongoDB  
**Deployment:** Vercel (Frontend), Render (Backend)  

---

## 💂️ Project Structure

```
/frontend (Frontend)
 ├── /src
 │   ├── /components
 │   │   ├── ClaimButton.jsx
 │   │   ├── CouponDisplay.jsx
 │   │   └── Timer.jsx
 │   ├── /pages
 │   │   └── Home.jsx
 │   ├── App.js
 │   ├── index.js
 │   └── styles.css
 ├── package.json
 ├── tailwind.config.js

/backend (Backend)
 ├── /models
 │   ├── Coupon.js
 │   └── ClaimLog.js
 ├── /routes
 │   └── couponRoutes.js
 ├── config/db.js
 ├── server.js
 ├── .env
```

---

## 🚀 Installation & Setup

### **1️⃣ Clone Repository**
```bash
git clone https://github.com/your-username/coupon-app.git
cd coupon-app
```

### **2️⃣ Backend Setup**
```bash
cd backend
npm install
```
- Create a `.env` file in `backend`:
  ```env
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```
- Start the backend:
  ```bash
  npm start
  ```

### **3️⃣ Frontend Setup**
```bash
cd ../frontend
npm install
npm start
```

---

## 🌍 Deployment

### **Frontend (Vercel)**
```bash
npm install -g vercel
vercel
```

### **Backend (Render)**
- Push to GitHub and connect **Render.com**  
- Set environment variable `MONGO_URI`  
- Deploy & get **public API URL**  

---

## 👉 API Endpoints

| Method | Endpoint                 | Description                 |
|--------|--------------------------|-----------------------------|
| POST   | `/api/coupons/claim-coupon` | Claims a coupon |
| GET    | `/api/coupons/available-coupons` | Fetches available coupons |

---

## 🤝 Contributing
1. Fork the repo  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m "Added new feature"`)  
4. Push to branch (`git push origin feature-name`)  
5. Submit a Pull Request 🚀  

---

## 🛡️ License
This project is licensed under the **MIT License**.  

---

## 💌 Contact
👨‍💻 **Developer:** Kunal Singh  
📧 Email: kunalsingh203001@gmail.com 
🔗 GitHub: [kunal-singh](https://github.com/72897)  
🔗 LinkedIn: [kunal-singh](https://linkedin.com/in/your-profile)  

---

### **✨ Star this repo if you found it useful! ⭐**

