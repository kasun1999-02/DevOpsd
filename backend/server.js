const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/post');
const contactRoutes= require('./routes/contactRoute');
const userRoutes = require('./routes/userRoute');
// const userRoute = require('./routes/userRoute'); // Commented out userRoute for now
const mongoose = require('mongoose');// Import the database configuration

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

const corsOptions = {
  origin: '*', // Allow all origins (not recommended for production)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and authentication headers
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


// Define the route for posts
app.use( postRoutes);
app.use( contactRoutes);
app.use( userRoutes);

// Define the route for users (if needed)
// app.use('/api/user', userRoute);

const PORT = process.env.PORT || 5000; // Use process.env.PORT for dynamic port allocation


const DB_URL = 'mongodb+srv://rhmkmrajakaruna:Kasun199902@vehiclecluster.5lx9m.mongodb.net/?retryWrites=true&w=majority&appName=Vehiclecluster';

mongoose.connect(DB_URL)
  .then(() => {
    console.log('Mongo DB Connection successful');
  })
  .catch((err) => console.log('Mongo DB Connection failed', err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`); 
});
