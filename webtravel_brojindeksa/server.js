const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// DB Config
const db = 'mongodb://starcevichamza21:kenansin@ac-8xl97pk-shard-00-02.hikdlwd.mongodb.net:27017,ac-8xl97pk-shard-00-00.hikdlwd.mongodb.net:27017,ac-8xl97pk-shard-00-01.hikdlwd.mongodb.net:27017/?authSource=admin&replicaSet=atlas-6nxnfp-shard-0&retryWrites=true&w=majority&appName=webtravel&ssl=true';

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/trips', require('./routes/trips'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port 5000"));
