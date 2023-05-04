# COSC 499 Group Git Assignment

## Group Members

Sanjana Kanchamreddy  
Samir Aliyev  
Sebi Unipan  
Tushan Shahid  

## Introduction

This will be a simple React app using TypeScript. It will have a landing page with some incremental features:

- Add new team membership
- Todo List
- Reminders about the upcoming course assignments

## Getting Started

1. Clone this repository
1. Run `npm install` to install dependencies
1. Run `npm start` to start the development server
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Using the Features

### Feature: Add New Membership to the Team

This feature allows user to add a new member to the Team by filling out a form with their name, role, display picture and a note (optional).  
Usage:

1. To route to the page which contains this feature, click on the tab that is named `Sanjana`.
2. In the form fields, enter your name, your team role, a url for your display image and a note about anything you would like to add.
3. Click on `Add Member`. This will create a new card in the list of members with your details.

### Feature: Add Todo List Component

1. To see this feature, head to the 'Sebi' tab using the buttons at the top of the page
1. Type something in the input and click the 'Add' button, empty inputs will **_not_** be accepted.
1. You can remove your item from the list by clicking the '❌' button next to it

### Feature: Reminders for the Upcoming Assignments in COSC499

This feature allows user to see all the upcoming assignments for course COSC499 in the upcoming months

1. To route to the page which contains this feature, click on the tab that is named `Samir`.
2. View the list of Assignments, Descriptions and their Deadlines
3. Click on `Clear All` after taking note of the deadlines. This will clear all of the reminders.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
