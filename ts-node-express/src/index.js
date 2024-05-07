const express = require('express');
const dotenv = require('dotenv');


// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(port, '0.0.0.0', () => {
     console.log(`Example app listening at http://localhost:${port}`);
   });
