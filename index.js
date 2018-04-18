const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/key');
const authRoutes = require('./routes/auth-routes/authRoutes');
require('./models/User');
require('./services/passport'); //importing just the file to make it work in the project..


const app = express();
mongoose.connect(keys.mongoURI);

authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);