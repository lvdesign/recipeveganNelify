var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
const cors = require('./cors');

var authenticate = require('../authenticate');
var router = express.Router();
router.use(bodyParser.json());



/* 
* GET users listing. 
authenticate.verifyUser, authenticate.verifyAdmin,
*/
router.options('*', cors.corsWithOptions, (req,res) => { res.sendStatus(200); });

router.get('/', cors.corsWithOptions, (req, res, next) => {
  User.find({})
  .then( user =>{
    res.statusCode= 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
  }, err => next(err))
  .catch( err => next(err))
  //res.send('respond with a resource toto');
});



/*
* CREATE  a USER : Post new User
*/
router.post('/signup', cors.corsWithOptions, (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {

      if( req.body.firstname)
        user.firstname = req.body.firstname;
      if( req.body.lastname)
        user.lastname = req.body.lastname;

      user.save( (err, user) => {
          
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
          }

        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful! '});
        });

      });
     
    }
  });
});


/*
* LOGIN TO THE SITE : Post login an User et creation du Token pour la suite du site passport.authenticate('local'), 
*/
router.post('/login', cors.corsWithOptions, (req, res, next) => {
  
  passport.authenticate('local', (err, user, info) => {
    if(err)
      return next(err);

    if(!user){
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false,  status: 'NOT successfully logged in!', err: info });
    }

    req.logIn(user, (err) =>{
      if(err){
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false,  status: 'Error -- NOT successfully logged in!', err:'Could not!' });
      }
  
    // OK
        var token = authenticate.getToken({ _id: req.user._id }); //token creation et retour ds le header
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'You are successfully logged in!', token: token });

      })
  })(req, res, next);

  
  
});



/*
* LOGOUT : get out the site
*/

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/'); // homePage
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});


router.get('/checkJWTToken', cors.corsWithOptions, (req,res)=> {
  passport.authenticate('jwt', { session: false}, (err, user,info) => {
      if(err)
      return next(err)

      if(!user){
          res.statusCode= 401;
          res.setHeader('Content-Type', 'application/json');
          return res.json({status: 'JWT invalid', success:false, err: info });
      }
      else{

        res.statusCode= 200;
          res.setHeader('Content-Type', 'application/json');
          return res.json({status: 'JWT ok', success:true, user: user });

      }

  }) (req,res);
} )

module.exports = router;
