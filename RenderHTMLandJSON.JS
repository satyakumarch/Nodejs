const express = require('express');
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Root route
app.get('', (req, res) => {
    res.send(`
        <h1>Hello world, how are you?</h1><a href="/about">About page</a>
        <a href="/contact">Contact page</a>
        `);
});

// About route with an HTML form
app.get('/about', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        
        <form action="/submit-student-info" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value=${req.query.name} required><br><br>
            
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required><br><br>
            
            <label for="grade">Grade:</label>
            <input type="text" id="grade" name="grade" required><br><br>
            
            <button type="submit">Submit</button>
        </form>
    </body>
    </html>
    `);
});

// Contact route
app.get('/contact', (req, res) => {
    res.send("Welcome to the contact page. Reach out to us anytime.");
});

// Route to handle form submission
app.post('/submit-student-info', (req, res) => {
    const { name, age, grade } = req.body;
    res.send(`Student info submitted successfully: Name - ${name}, Age - ${age}, Grade - ${grade}`);
});

// Start the server on port 1000
app.listen(1000, () => {
    console.log('Server is running on port 1000');
});
