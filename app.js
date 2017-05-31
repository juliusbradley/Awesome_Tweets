// Require Dependencies
const Express      = require('express');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const path         = require('path');

const home = require('./routes/home');
const posts = require('./routes/posts');

const app = Express();

const PORT = 4000;

app.set('view engine', 'ejs');
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(Express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/posts' , posts);

app.listen(PORT, function() {
  console.log(`Server listening on http://localhost:${PORT}`)
});
