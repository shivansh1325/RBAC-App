# Role-Based Access Control (RBAC) Application

## **Overview**
This project demonstrates a **Role-Based Access Control (RBAC)** system with authentication and authorization, built using **Node.js** for the backend and a simple **HTML/CSS/JavaScript** frontend. The system ensures that users are authenticated and authorized to access resources based on their roles.

---

## **Features**
- **User Registration**: New users can register with a username, password, and role.
- **User Login**: Existing users can log in securely.
- **Role-Based Authorization**: Different roles (Admin, User, Moderator) have specific access rights.
- **JWT Authentication**: JSON Web Tokens (JWT) are used for secure user authentication and session management.
- **Secure Password Handling**: Passwords are hashed using bcrypt.
- **RESTful API**: Backend API for user management and RBAC features.

---

## **Project Structure**
project/
├── backend/                  # Backend logic and API
│   ├── app.js                # Entry point for the Node.js server
│   ├── routes/               # Route definitions
│   │   └── userRoutes.js     # API routes for user authentication and authorization
│   ├── middleware/           # Middleware for request handling
│   │   └── authMiddleware.js # Middleware for protecting routes and handling roles
│   ├── models/               # Database models
│   │   └── userModel.js      # User schema and model for MongoDB
│   ├── utils/                # Utility functions
│   │   └── jwtUtils.js       # JWT generation and verification utility
│   ├── package.json          # Node.js dependencies and scripts
│   └── package-lock.json     # Dependency lock file
├── frontend/                 # Frontend for user interaction
│   ├── index.html            # Main HTML file
│   ├── script.js             # JavaScript logic for frontend
│   └── style.css             # Styling for the frontend


---

## **Backend**

### **1. `app.js`**
- Entry point for the application.
- Connects to MongoDB using Mongoose.
- Configures middleware (CORS, JSON parser).
- Sets up API routes for user-related operations.

### **2. Routes**
- **`routes/userRoutes.js`**:
  - Defines endpoints for:
    - **POST `/register`**: User registration.
    - **POST `/login`**: User login.
    - **GET `/admin`**: Admin-only access.

### **3. Middleware**
- **`middleware/authMiddleware.js`**:
  - Protects routes by validating JWT tokens.
  - Authorizes users based on roles.

### **4. Models**
- **`models/userModel.js`**:
  - Defines the MongoDB schema for users.
  - Handles password hashing before saving to the database.

### **5. Utilities**
- **`utils/jwtUtils.js`**:
  - Functions to generate and verify JWT tokens.

---

## **Frontend**

### **1. `index.html`**
- Contains the structure for user interaction:
  - Forms for registration and login.
  - Sections for displaying role-protected content.

### **2. `script.js`**
- Handles communication with the backend API.
- Implements the logic for user registration, login, and token management.

### **3. `style.css`**
- Adds styling to the HTML elements for a visually appealing interface.

---

## **Installation and Execution**

### **Prerequisites**
- Node.js installed on your system.
- MongoDB installed and running locally.

### **Steps to Run the Application**
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project

