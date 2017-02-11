var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/signup',function(req,res){
  res.render('signup.html',{title: 'Signup'});
});

router.get('/login',function(req,res){
  res.render('login.html',{
    title:'Login Page'
  });
});

router.get('/profile',function(req,res){
  res.render('profile.html',{
    title:'Profile Page'
  });
});

router.get('/dashboard',function(req,res){
  res.render('/dashboard.html',{
    title:'Dashboard'
  });
});
module.exports = router;
