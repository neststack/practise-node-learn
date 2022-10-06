const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });
const app = express();
const PORT = process.env.PORT || 5000;
const posts = require('./routes/postRouter');
const users = require('./routes/userRouter');

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('DB connection successful');
    });

app.use(express.json());

app.get('/', (req, res) => {
    res.send(
        '<h1>NodeApp</h1><a target="_blank" href="http://localhost:5000/users">Users</a></br><a target="_blank" href="http://localhost:5000/posts">Posts</a></br></br><p>Users supports Get,Post,and search by Name query</p><p>Posts supports Get,Post,and search by Title query</p>'
    );
});

app.use('/posts', posts);
app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
