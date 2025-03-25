# CST-391: Milestone 4 - Angular Application
**Student:** Matthew Kollar  
**Date:** March 25, 2025  

## Overview

This project is part of the CST-391 JavaScript Web Application Development course at Grand Canyon University.  
In **Milestone 4**, we built a front-end web application using **Angular** that integrates with the back-end REST API developed in Milestone 3. The frontend supports full CRUD operations on faith-based learning resources.

## Screencast Demonstration

**Screencast Link**: [Watch the Demo on Somup](http://somup.com/cTeTYu7Wri)

This screencast demonstrates:
- Application navigation using Angular Router
- Use of Bootstrap-styled navigation bar
- UI-based Create, Read, Update, and Delete operations
- Visual feedback for form validation and navigation polish

## GitHub Repository

**Repository Link**: [FaithTrack Angular + NodeJS Project (Milestone 4)](https://github.com/matthewkollar/CST-391-Milestone-4-Angular-App)

---

## Design Updates

### Description

The design was updated to include an Angular-based frontend that connects to the existing REST API. The UI includes a responsive Bootstrap navigation bar, a dedicated home page, resource list and details views, and a form to create and edit resources.

### Summary of Changes and Known Issues

| Change / Update                        | Description                                                  | Known Issue |
|----------------------------------------|--------------------------------------------------------------|-------------|
| Angular UI integrated                  | Connected to REST API using HttpClientModule                | No          |
| Resource CRUD views built              | List, Create, Edit, Delete Resource from UI                 | No          |
| Bootstrap Navbar                       | Links to Home, All Resources, Add Resource                 | No          |
| HomeComponent added                    | Homepage with links and CTA button                         | No          |
| Cancel button on form navigates back   | Improved UX when cancelling form action                    | No          |
| Updated Routing (app.routes.ts)        | Added Home route, preserved existing logic                 | No          |
| Form validation in resource-form       | Title, description, category ID, and scripture validated   | No          |

---

## Technologies Used

- **Angular 17** with TypeScript (standalone components)
- **Bootstrap 5** for responsive layout
- **Express.js** for REST API
- **MySQL** database (hosted locally via MAMP)
- **Postman** for API testing and documentation

---

## Functional Requirements Met

- ✅ Full CRUD (Create, Read, Update, Delete) operations through Angular UI
- ✅ Bootstrap NavBar for routing and navigation
- ✅ Angular routing with routerLink and dynamic routes (edit/:id)
- ✅ Form validation and error handling
- ✅ Screencast of application functionality

---

## Lessons Learned

- Better understanding of Angular Standalone Components and Routing
- Importance of aligning form structure with API expectations
- Handling dynamic routing for edit/update flow
- Enhanced my ability to connect front-end UI with real backend data via HttpClient
- Improved UI/UX polish through Bootstrap and clean navigation flow

---

## Pending Bugs / Issues

- No current bugs reported. All known issues have been addressed during implementation and testing.
