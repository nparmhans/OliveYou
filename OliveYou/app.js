console.log("In the App");
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pg = require('pg');
var conString = 'postgres://localhost:5432/users';
//
// pg.connect(conString,function(err,client,done){
//     if(err){
//       return console.error('error fetching client from pool', err);
//     }
//     client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
//       done();
//
//     if (err) {
//       return console.error('error happened during query', err);
//     }
//     console.log(result.rows[0]);
//     process.exit(0);
//   });
// });
// MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds149059.mlab.com:49059/oliveyou',(err,database) =>{
//   if (err) return console.log(err)
//   db = database;
// })
// }
// var index = require('./routes/index');
// var users = require('./routes/users');
// var signup = require('./routes/signup');
var Bandwidth = require("node-bandwidth");

var client = new Bandwidth({
  userId : "u-rgidt6l7bn7gdmzj7dz7ygy",
  apiToken : "t-dej3tjlk4phu4arz7qmarua",
  apiSecret : "7knmaq4gpcd5zh4xsathzphnqv46rry5rrtb2ba"
});

var app = express();

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/css', express.static(path.join(__dirname,'public/stylesheets')));
app.use('/js', express.static(path.join(__dirname,'public/javascripts')));

app.get('/',function(req,res){
  res.render('index.html');
});

app.get('/signup',function(req,res){
  res.render('signup.html');
});
app.get('/login',function(req,res){
  res.render('login.html');
});

app.get('/profile',function(req,res){
  res.render('profile.html');
});

app.get('/dashboard',function(req,res){
  res.render('dashboard.html');
});

app.post('/user',function(req,res,next){
  var user = req.body;
  console.log("user" + user);

  // pg.connect(conString,function(err,client,done){
  //   if(err){
  //     return next(err);
  //   }
  //   client.query('INSERT INTO users(full_name,telephone,username,password) VALUES ($1,$2,$3,$4);',
  //   [user.full_name,user.telephone,user.username,user.password],function(err,result){
  //     console.log(result);
  //     done();
  //
  //     if(err){
  //       return next(err);
  //     }
  //
  //     res.end();
  //   });
  // });
  res.redirect('dashboard.html');
});

app.get('/user',function(req,res,next){
  res.redirect('dashboard.html');
  // pg.connect(conString,function(err,client,done){
  //   if(err){
  //     return next(err);
  //   }
  //   client.query('SELECT full_name FROM users;', [], function(err,result){
  //     done();
  //
  //     if(err){
  //       return next(err);
  //     }
  //     res.json(result.rows);
  //     res.render("/dashboard.html");
  //   });
  // });
});

// app.use('/', index);
// app.use('/users', users);
// app.use('/signup', signup);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

client.Message.send({
    from : "+19843555483", // This must be a Catapult number on your account
    //to   : "+14436053023",
    text : "Hello world."
}, function(err, message) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Message sent with ID " + message.id);
});
module.exports = app;
