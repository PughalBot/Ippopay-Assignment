const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/passwordDB', { useNewUrlParser: true, useUnifiedTopology: true });

const passwordSchema = new mongoose.Schema({
    password: String,
    strength: Number
});
const Password = mongoose.model('Password', passwordSchema);

app.post('/savePassword', (req, res) => {
    const newPassword = new Password({
        password: req.body.password,
        strength: req.body.strength
    });
    newPassword.save().then(() => res.json('Password saved!'));
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
