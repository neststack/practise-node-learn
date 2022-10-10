const app = require('express')();
const server = require('http').createServer(app);
const path = require('path');
const ejs = require('ejs');
// const pug = require('pug');

app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));

require('./src/routes/route')(app);

server.listen(5000, () => {
    console.log(`listening on 5000`);
});
