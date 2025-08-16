# 📘 Book Catalog API with Authentication

This project is a RESTful API developed for a backend module test.The API allows users to register and log in to receive a JWT for authentication. Authenticated users can perform full CRUD (Create, Read, Update, Delete) operations on a collection of books, while public routes are available for viewing books.

## 🎯 Objective

The primary objective is to develop a RESTful API with the following capabilities:
* Register and log in users using JWT-based authentication. 
* Perform full CRUD operations on books.
* Secure the routes for creating, updating, and deleting books using JWT.
---

## 🧱 Tech Stack

The core technologies used in this project are:
* **Backend**: Node.js, Express
* **Database**: MongoDB with Mongoose
* **Authentication**: JSON Web Tokens (JWT)
* **Password Hashing**: bcrypt

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

You'll need [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/hariram130303/cuvette-backend-module-test.git
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  [cite_start]**Create an environment file**: Create a `.env` file in the root of your project and add the following variables. [cite: 49]
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_key
    PORT=5000
    ```

4.  **Run the server**:
    * For development (with nodemon):
        ```bash
        npm run dev
        ```
    * For production:
        ```bash
        npm start
        ```
    The server will start on `http://localhost:5000`.

---

## 🧪 API Endpoints

The API provides the following endpoints.

| Method | Endpoint              | Auth Required | Description                                  |
| :----- | :-------------------- | :------------ | :------------------------------------------- |
| `POST` | `/api/users/register` | No            | [cite_start]Register a new user [cite: 10]                 |
| `POST` | `/api/users/login`    | No            | [cite_start]Log in a user and receive a JWT [cite: 11]     |
| `GET`  | `/api/books`          | No            | [cite_start]Get a list of all books [cite: 14]             |
| `GET`  | `/api/books/:id`      | No            | [cite_start]Get a single book by its ID [cite: 14]         |
| `POST` | `/api/books`          | **Yes** | [cite_start]Create a new book [cite: 13]                   |
| `PUT`  | `/api/books/:id`      | **Yes** | [cite_start]Update an existing book's details [cite: 14] |
| `DELETE`| `/api/books/:id`      | **Yes** | [cite_start]Delete a book [cite: 14]                       |

### Testing with Postman

This project is fully testable using Postman. A Postman collection and environment are included in the project files to help you test all the API endpoints.You can follow the `Steps to Setup Postman.docx` guide to import and use them.