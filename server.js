// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
    const { signUp } = require('./src/controllers/authController');

// Middleware for parsing JSON requests
app.use(express.json());

// Define routes and handle requests
// Example:
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// Import the signUp function from the controller file
// const { signUp } = require('./controllers/authController');

// Define route for sign-up endpoint
app.post('/signup', (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Call the signUp function from the controller
    signUp(req, res);
});
// app.post('/signup', (req, res) => {
//         // Set CORS headers
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//         res.setHeader('Access-Control-Allow-Methods', 'POST');
//         res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     const { email, password } = req.body;

//     // Validate the incoming data (optional)

//     // Process the sign-up data (e.g., save to database)

//     // Send response
//     res.status(200).json({ message: 'Sign-up successful', data: req.body });
// });

// Allow all origins to access the server (you may want to restrict this in production)
const corsOptions = {
    origin: 'http://localhost:3000' // Replace with the origin of your front-end application
};

app.use(cors(corsOptions));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
