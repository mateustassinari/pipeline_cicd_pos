const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',  (req, res) => {
    res.redirect('/users');
});

app.get('/users', (req, res) => {

    let users = [{
        name:'User 1',
        email: 'user1@email.com',
        id:1
    },{
        name:'User 2',
        email: 'user2@email.com',
        id:2
    },
    {
        name:'User 3',
        email: 'user3@email.com',
        id:3
    }];

    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({
        users
    }));
   
});

app.get('/users/:id', (req, res) => {

    let users = [{
        name:'User 1',
        email: 'user1@email.com',
        id:1
    },{
        name:'User 2',
        email: 'user2@email.com',
        id:2
    },
    {
        name:'User 3',
        email: 'user3@email.com',
        id:3
    }];

    let id = req.params.id;

    let user = users.filter(u => u.id == id);

    if(user.length == 0) {
        res.statusCode = 400;
        res.end('User not found');
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({
        user
    }));
   
});

app.get('/products', (req, res) => {

    let products = [{
        name:'Notebook',
        id:1
    },{
        name:'Monitor',
        id:2
    }];

    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({
        products
    }));
   
});


module.exports = app;
