const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const redis = require('redis');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to a local Redis instance directly
const redisClient = redis.createClient({
    url: 'redis://localhost:6379' // Local Redis URI
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.connect();

app.post('/savePassword', async (req, res) => {
    const { password, strength } = req.body;

    try {
        console.log('Received request:', req.body); // Log the received data
        await redisClient.set(password, strength);
        console.log(`Password saved: ${password}`); // Log the saved password
        res.json('Password saved!');
    } catch (err) {
        console.log('Error saving password:', err); // Log any errors
        res.status(400).json('Error: ' + err.message);
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
