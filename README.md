# FE Web App
## To checkout the hosted app
Visit https://fe-web-app-7322c.web.app
## To run the application from the source code

In the project directory, you can run:
### `npm install` or `yarn install`
This installs all project dependencies. Necessary before you attempt to run the application
### `npm start` after installing dependencies

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- The app starts out blank. Use the fab with a plus ( + ) icon in the bottom right corner to add todos.
- Pagination kicks in when you exceed 5 todos
- The `/todos` page displays a list of todos showing only the titles. Click on a todo to go to the `/todos/:id` page showing details of the todo as well as an edit link.
- To update or delete a todo, click `Edit Todo` on the `/todos/:id` page which then takes you to the edit form.
- You can always click on the app title ("Your Todos") in the header to go back to the todos page.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
