# Connor's Classics | Full Stack E-Commerce Platform

[Live Demo](https://connorsshop.onrender.com/)

A robust e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). This platform features full user authentication, product management, and a fully integrated PayPal sandbox environment for secure transaction testing.

> **Note:** The live demo is hosted on Render's free tier. Please allow 30-60 seconds for the server to spin up upon the first request.

## 🚀 Key Features

### 🛒 Shopping & Checkout
* **Secure Payments:** Integrated PayPal API (Sandbox) for handling credit/debit transactions.
* **Cart Logic:** Persistent shopping cart functionality with real-time total calculation.
* **User Profiles:** Customers can create accounts, manage shipping addresses, and view order history.

### 🛠️ Admin Management
* **Inventory Control:** Create, update, and delete products (CRUD) with image upload support.
* **Order Tracking:** View, update, and manage status of customer orders.
* **User Management:** Admin privileges to update user roles and data.

## 💻 Tech Stack

* **Frontend:** React.js, Redux (for state management), React-Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **DevOps:** Hosted on Render

## 🔧 Getting Started Locally

1. Clone the repository
   ```bash
   git clone [https://github.com/Connok/connors-classics.git](https://github.com/YOUR_USERNAME/connors-classics.git) 
2. **Install dependencies (Root and Frontend)**
   ```bash
   npm install
   cd frontend && npm install 
3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   NODE_ENV = development
   PORT = 5000
   MONGO_URI = your_mongodb_uri
   PAYPAL_CLIENT_ID = your_paypal_id
4. ** Run the app
   ``` bash
   npm run dev

## 🔮 Future Roadmap
* Integration of Stripe for alternative payment methods.

* Dynamic tax calculation API based on Canadian Provinces.

* Email confirmation service (Nodemailer) for successful orders.

