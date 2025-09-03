NxtStay
NxtStay is a full-stack web application for booking and listing vacation rentals, inspired by platforms like Airbnb. Users can browse, list, and review unique stays from around the world.

Live Demo
Deployed Project on Render

Features
User authentication (signup/login)
List new properties with images, descriptions, and locations
Browse and search listings by location and country
Leave reviews and ratings for listings
Responsive and modern UI
Tech Stack
Backend: Node.js, Express.js
Frontend: EJS templates, HTML, CSS, JavaScript
Database: MongoDB (Mongoose ODM)
Other: Cloudinary (for image uploads), Multer, Passport.js (authentication)
Project Structure
MAJORPROJECT/
├── app.js                # Main Express app
├── middleware.js         # Custom middleware
├── package.json          # Project dependencies and scripts
├── schema.js             # Mongoose schemas
├── controllers/          # Route controllers
├── init/                 # Seed data and initialization
├── models/               # Mongoose models
├── public/               # Static assets (CSS, JS)
├── routes/               # Express route definitions
├── utils/                # Utility functions
├── views/                # EJS templates
Getting Started
Clone the repository:
git clone https://github.com/yourusername/NxtStay.git
cd NxtStay/MAJORPROJECT
Install dependencies:
npm install
Set up environment variables:
Create a .env file for MongoDB URI, Cloudinary keys, and session secrets.
Run the app locally:
node app.js
Visit:
http://localhost:3000/listings
Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.
