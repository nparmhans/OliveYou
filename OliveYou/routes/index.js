console.log("hereRoute");

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
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


app.get('/user',function(req,res,next){
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
      res.redirect("dashboard.html");
    });
  });
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
  //     if(err){
  //       return next(err);
  //     }
  //
  //     res.end();
  //   });
  // });
  res.redirect('dashboard.html');
});
module.exports = router;
