# Backend Setup
This is a Node.js project built using Express.js, Sequelize, and MySQL. It includes environment configuration through an `.env` file.

## Table of Contents

- [Installation](../README.md#installation)
- [Configuration](../README.md#configuration)
- [Database Setup](../README.md#database-setup)
- [Running the Application](../README.md#running-the-application)
- [Project Structure](../README.md#project-structure)
- [Dependencies](../README.md#dependencies)

## Installation

1. **Clone the repository:**

     ```bash
     git clone https://github.com/walinabizada/angular-express-sequelize-platform.git
     cd angular-express-sequelize-platform

     Install dependencies

     Make sure you have Node.js and npm installed, then run:
     npm install

## Configuration 
     
     Create an .env file in the root of the project and add the following environment variables:

          DB_HOST=your-database-host
          DB_USER=your-database-username
          DB_PASSWORD=your-database-password
          DB_NAME=your-database-name
          DB_PORT=your-database-port

     Replace the placeholder values with your actual database configuration.

## Database Setup

1. **Run Migrations:**
     To set up your database schema, run the migrations:
     npm run migrate


## Running the Application

     To start the application, run:
     npm run dev

## Dependencies

     express: Web framework for Node.js.
     sequelize: ORM for SQL databases.
     mysql2: MySQL client for Node.js.
     dotenv: Load environment variables from a .env file.

