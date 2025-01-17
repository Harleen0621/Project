// const harry=require("./second");
// console.log("Hello World",harry)

const express = require('express');
const app = express();

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html'); // Serve your login HTML file
})

// Serve static files from the 'public' directory
app.use("/public",express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const path = require('path');
const favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
