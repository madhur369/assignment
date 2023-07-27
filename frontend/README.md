Project Title - CRUD Application

Description -

This project is a simple CRUD (Create, Read, Update, Delete) application built with React.js for the frontend and Node.js with Express.js for the backend. The application allows users to manage a list of users, including adding new users, viewing the list of users, updating existing user information, and deleting users from the system.

Features -

* Display a list of users with their names, email addresses, and ages.
* Create a new user by filling out a form with name, email, and age details.
* View the details of a specific user by clicking on their name from the user list.
* Update user information by editing the user details in the update form.
* Delete a user from the list.
* Search functionality to filter users based on name or email.
* Pagination for displaying a limited number of users per page.


Technologies Used -

* Frontend: React.js, React Router DOM, Bootstrap, Axios
* Backend: Node.js, Express.js, MongoDB, Mongoose
* API: RESTful API
* Form validation using Formik and Yup to ensure valid inputs.

Installation

* Clone the repository to your local machine.
* Make sure you have Node.js and MongoDB installed on your machine.
* Navigate to the project directory and run npm install to install the required dependencies for both frontend and backend.
* Create a .env file in the backend directory and set up the MongoDB connection string.
* MONGODB_URI=your_mongodb_connection_string
* Run the backend server using npm start in the backend directory.
* Run the frontend React app using npm start in the frontend directory.


Usage -

* Open the web application in your browser by accessing http://localhost:3000/.
* You will see the list of users if any are available, or a message indicating that there are no users yet.
* To create a new user, click on the "Create User" link in the navigation bar and fill out the form with the required details.
* To view the details of a user, click on their name from the list. This will take you to the user's detail page.
* On the user detail page, you can click on the "Edit" button to update the user's information or click on the "Delete" button to       remove the user from the list.
* Use the search bar at the top to filter users by name or email.
* Pagination allows you to navigate between pages if there are more users than can be displayed on a single page.

Additional Notes -

* The application uses React Router for client-side routing and navigation.
* The backend API handles all CRUD operations for managing user data.
* Form validation is implemented on the frontend using Yup to ensure data integrity.