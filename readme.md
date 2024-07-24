# User Management System

## Overview
The User Management System is a Node.js (molecular.js) application that **simulates** a user management workflow. It includes services for user management, email communication, and authentication. 

The application demonstrates how to:
- Create a new user and retrieve all users.
- Send a welcome email to the newly created user.
- Authenticate a user with given credentials.

The system uses asynchronous service calls and handles initialization and cleanup tasks for each service, ensuring proper startup and shutdown sequences.

## Services
- UserService: Handles user creation and retrieval.
- EmailService: Manages sending emails.
- AuthService: Handles user authentication

## Note
- This project is a simulation designed for educational purposes to demonstrate microservices architecture using Moleculer.js. 
- It is not intended for use in real-world applications. 
- In a production environment, more robust implementations and considerations would be required, including security measures, error handling, and service scalability.
