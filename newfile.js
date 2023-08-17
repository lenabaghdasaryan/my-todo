const express = require('express');
const app = express();
const port = 3000;

app.get('/title' , () => {
    console.log('Hello World');
})
app.listen(port, () => {
    console.log(`Server is working on port ${port}`)
})