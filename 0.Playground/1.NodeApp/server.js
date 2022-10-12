const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const pug = require('pug');
const expressLogger = require('express-logger');

require('dotenv').config({ path: 'config.env' });
const PORT = process.env.PORT || 5000;
const posts = require('./routes/postRouter');
const users = require('./routes/userRouter');

// Database
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

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(expressLogger({ path: 'logfile.txt' }));

// Pug template serve
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
    // res.send(
    //     '<h1>NodeApp</h1><a target="_blank" href="http://localhost:5000/users">Users</a></br><a target="_blank" href="http://localhost:5000/posts">Posts</a></br></br><p>Users supports Get and Post queries</p><p>Posts supports Get and Post queries</p>'
    // );
});

// Filesystem write read
fs.writeFileSync(
    './test.txt',
    JSON.stringify({ name: 'test', email: 'test@test.com' })
);
fs.readFile('./test.txt', (err, data) => {
    console.log(JSON.parse(data));
});

app.use('/posts', posts);
app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
