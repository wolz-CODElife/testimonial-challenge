# Exercism Frontend Developer Job: Project

This is my application for the Frontend Developer Job role! 🥳

As there is a high number of applicants for this role, I am submiting an implementation of the programming challenge that will demonstrate my CSS and React skills.

The instructions are below.
If you have questions, you can ask them by opening an issue in this repository (the preferred method), or you can email joeladewole3@gmail.com (emails will have a slower response time than opening issues).

Welcome! 🙂

## Overview

The task is to create a page which lists all the testimonials a user has given.
It should look like this:

![testimonials](https://user-images.githubusercontent.com/286476/153847595-f0ed0d97-8ee5-4a54-9091-e92e92a8f8cd.svg)

## Styling

A key criteria for this job role is how accurately I replicated the designs.
I accessed the Figma file with all the information I needed at https://www.figma.com/file/qvDOfGC4uLDUcjRDaVMIrU/Exercism-Front-end-Job-Project?node-id=0%3A1 (note: I logged into Figma to see the comments).
Note the comments on various components for more information.

Ideally, I should use Tailwind 3 for the CSS, but plain CSS is totally fine too.

I used Tailwind for the first time! 🙂

## Functionality

The functionality should be implemented using React.
Ideally, I supposed to use TypeScript, but JavaScript is fine too.

I provides some tests as well.

The areas that are implemented are:

- Track selection:
  - Clicking the track button (top-left) opens the track selector.
  - Clicking on a track within the track selector updates the table accordingly and close the selector.
  - The tracks are filtered to only show the list of tracks on which a user has given testimonials.
- Exercise filtering:
  - Typing into the exercise box filters the tracks.
  - I Considered reducing calls to the API while the user is still typing.
- Sorting:
  - There are two sort options: oldest first or newest first.
- Pagination:
  - Pagination was implemented.
  - Filtering updates pagination options (i.e. if there are only two pages of Ruby results then the pagination only shows two pages).

Other notes:

- All filtering of the testimonials was done at the server-side level via API calls.
- I did't implement the functionality of the top-bar.

### API Calls

To get data I used Exercism's API. There are two endpoints, both which return JSON and neither of which need authentication:

#### Tracks

I retrieved the list of all tracks from: https://exercism.org/api/v2/tracks

#### Testimonials

I ccess the testimonials from: https://exercism.org/api/v2/hiring/testimonials

I used the following params to modify which records are returned:

- `page`: Specify to return a different page (e.g. `2`) of the results (note: page `1` is the first page).
- `track`: Pass a complete track slug (e.g. `python`) to only return the Ruby track's testimonials.
- `exercise`: Pass a partial exercise name (e.g. `ming`) to only return the exercises that contain the word "ming".
- `order`: Specify either `newest_first` or `oldest_first` (default) to switch the order.

A complete URL might be `https://exercism.org/api/v2/hiring/testimonials?page=2&track=python&exercise=ming&order=newest_first`.

The endpoint returns JSON with the following top-level keys:

- `testimonials`: An object containing information related to the page of testimonials that is to be rendered.
  - `results`: The testimonials containing the relevant information to render on the UI.
  - `pagination`: Pagination data to allow you to render the pagination section.
- `tracks`: A list of all tracks that this user has given testimonials on.
- `track_counts`: An object mapping tracks to the number of testimonials for that track.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To install project dependencies, run:

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
