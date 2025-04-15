# CST-391: Milestone 5 - React Application
**Student:** Matthew Kollar  
**Date:** April 15, 2025  

## Overview

This project is part of the CST-391 JavaScript Web Application Development course at Grand Canyon University.  
In **Milestone 5**, we converted the existing Angular frontend into a **React** application that connects to the **Express/NodeJS REST API** created in Milestone 3. This app allows users to manage faith-based resources with full CRUD functionality.

## Screencast Demonstration

**Screencast Link**: [Watch the Demo on Somup](http://somup.com/cTfoFjszSF)

This screencast demonstrates:
- Home page with welcome message and navigation CTA
- Responsive Bootstrap-styled navigation bar
- CRUD operations using React and Fetch API
- React Router navigation
- Form validation with react-hook-form

## GitHub Repository

**Repository Link**: [FaithTrack React + NodeJS Project (Milestone 5)](https://github.com/matthewkollar/CST-391-Milestone-5-React-Front-End)

---

## Design Updates

### Description

The design was updated to implement the same functionality from Milestone 4 in **React**. The React application includes:
- HomePage, ResourceList, Add/Edit forms
- Navigation using React Router DOM
- Form state and validation using `react-hook-form`
- Responsive UI using Bootstrap

### Summary of Changes and Known Issues

| Change / Update                        | Description                                                  | Known Issue |
|----------------------------------------|--------------------------------------------------------------|-------------|
| React UI built with JSX                | Replaced Angular components with React JSX components        | No          |
| Resource CRUD functionality            | List, Add, Edit, Delete using async fetch() calls            | No          |
| Bootstrap Navbar                       | Fixed layout and styling for navigation links                | No          |
| Home Page improved                     | Enhanced visual layout and styling of welcome page           | No          |
| Title and favicon updated              | Tab title changed to "FaithTrack" and favicon updated        | No          |
| React logo replaced with cross icon    | Custom favicon with faith-based symbol                       | No          |

---

## Completed REST API Documentation

All REST endpoints used by the React frontend were tested and documented using **Postman**.

| Method | Endpoint                             | Description              |
|--------|--------------------------------------|--------------------------|
| GET    | `http://localhost:5000/api/resources`     | Fetch all resources      |
| POST   | `http://localhost:5000/api/resources`     | Create a new resource    |
| PUT    | `http://localhost:5000/api/resources/5`   | Update resource with ID 5 |
| DELETE | `http://localhost:5000/api/resources/1`   | Delete resource with ID 1 |

---

## Technologies Used

- **React 19** (JSX with functional components)
- **Bootstrap 5** for styling and responsive layout
- **React Router DOM** for routing
- **React Hook Form** for form validation
- **Express.js** for REST API
- **MySQL** database (via MySQL Workbench)
- **VS Code** for development

---

## Functional Requirements Met

- ✅ Full CRUD (Create, Read, Update, Delete) operations through React UI
- ✅ React Router with route paths and dynamic edit route
- ✅ Bootstrap NavBar for navigation
- ✅ Form validation using react-hook-form
- ✅ Clean homepage layout with welcome CTA
- ✅ Screencast demonstrating full functionality

---

## Lessons Learned

- How to migrate from Angular to React using component-based architecture
- Using `react-hook-form` for clean form validation in React
- Managing async API requests and error handling with Fetch API
- React routing, dynamic parameters, and page navigation
- Importance of UI layout and visual polish for user engagement

---

## Pending Bugs / Issues

- No known issues or bugs. All views and functionality work as expected.
