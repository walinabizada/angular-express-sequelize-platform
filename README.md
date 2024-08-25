# Project details: 
I created a mini version of the platform with at least three core functionalities: user registration, a job posting application, and a simple company directory. The project should be designed using modern full-stack technologies.

## Project Overview::

Backend: Implemented using Node.js with Express. The backend features RESTful APIs for user management, job postings, and company directory operations.

Database: MySQL was used for the database, with a schema designed to support the functionalities and ensure proper relationships.

Frontend: The frontend was built using Angular, providing a responsive user interface that interacts seamlessly with the backend via the APIs.

Authentication: User authentication is implemented using JWT (JSON Web Tokens) to ensure secure access to backend services.


# Backend Setup
This is a Node.js project built using Express.js, Sequelize, and MySQL. It includes environment configuration through an `.env` file.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

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



# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Setup:

1.	Install Node.js and npm: Ensure you have [Node.js](https://nodejs.org/en) and npm installed on your system. You can download and install them from nodejs.org.
2.	Verify installation:
   
    node –v
  	 
  	npm –v
 
3.	Install Angular CLI globally using npm:
   
    npm install -g @angular/cli

4.	Verify the installation:
   
    ng version

5.	Install Dependencies:
    
       npm install


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
