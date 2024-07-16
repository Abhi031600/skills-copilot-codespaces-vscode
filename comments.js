// Create web server

const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const comments = [
    {
        id: 1,
        name: 'John',
        comment: 'Hello World!'
    },
    {
        id: 2,
        name: 'Smith',
        comment: 'Hello Universe!'
    }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Run the server using node comments.js
// Open the browser and go to http://localhost:3000/comments
// You should see the comments in JSON format
// Use Postman to add a new comment
// Go to Postman and do a POST request to http://localhost:3000/comments
// Add a comment in the body as JSON
// {
//     "id": 3,
//     "name": "Doe",
//     "comment": "Hello Mars!"
// }
// You should see the new comment in the list of comments