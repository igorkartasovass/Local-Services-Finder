const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/services', serviceRoutes);

// connect to database and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error('Connection to database unsuccessful:', err));