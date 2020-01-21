const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://jaksonsneider:jakson@9987@omnistack-loadn.mongodb.net/omni10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        menssage: 'Hello Word',
        date: new Date(),
    })
});

app.listen(3333);

// request.query
// request.params
// request.body