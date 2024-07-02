# Dynamic-Form-Creation-and-Submission-App

Objective
Create a dynamic form app where users can build and fill forms with single-choice or multiple-choice questions using React, Express, and MongoDB.

Features
Form Creation Screen
Add unlimited questions.
Each question can have up to 4 options.
Choose between single-choice and multiple-choice questions.
Drag and drop to reorder questions.
Preview the form before saving.


Form Fill Screen
Users can fill out the created forms.
Responses are saved to the database.


Optional Features
User authentication.
Form analytics/dashboard.


Tech Stack
Frontend: React, Redux, react-beautiful-dnd, Formik/React Hook Form
Backend: Express, Node.js
Database: MongoDB


Project Structure

/backend
  /controllers
    formController.js
  /models
    formModel.js
    responseModel.js
  /routes
    formRoutes.js
  index.js
/frontend
  /src
    /components
      FormCreation.js
      FormFill.js
      FormList.js
    /store
      formSlice.js
      store.js
    App.js
    index.js
  package.json
package.json


Setup Instructions


Prerequisites
Node.js
MongoDB


Backend Setup
Navigate to the backend folder:

cd backend
Install dependencies:

npm install
Start the server:

node index.js


Frontend Setup
Navigate to the frontend folder:

cd frontend
Install dependencies:

npm install
Start the development server:

npm start


Environment Variables
Create a .env file in the backend directory and add the following environment variables:


MONGODB_URI=mongodb://localhost:27017/dynamic_forms
PORT=5000


API Endpoints


Form API
GET /api/forms: Retrieve a list of all forms.
POST /api/forms: Create a new form.
GET /api/forms/
: Retrieve details of a specific form.
POST /api/forms/submit: Submit form responses.


Frontend Components
FormCreation: Component for creating forms.
FormFill: Component for filling out forms.
FormList: Component for listing all forms.


Running Tests
To be added.

Deployment
Backend: Deploy on a hosting service like Heroku.
Frontend: Deploy on a hosting service like Vercel.


Evaluation Criteria
Code Quality: Clean, readable, well-documented.
Functionality: All features working correctly.
Design: User-friendly and responsive.
Creativity: Any additional enhancements.
