const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('passport');

require('dotenv').config();

const User = require('../models/User');
router.use(cors());

router.post('/register', (req, res) => {
  const {name, email, password } = req.body;

  User.findOne({
    email: email
  }).then(user => {
    if(!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        User.create(name, email, password).then(user => {
          res.json({ status: user.email +  ' Registered'});
        }).catch(err => {
          res.send('error: ' + err);
        });
      });
    } else {
      res.json({ error: 'User already exists' })
    }
  }).catch(err => {
    res.send('error: ' + err)
  })
})

router.post('/login', (req, res) => {
  User.findOne({
    email : req.body.email
  }).then(user => {
    if(user) {
      if(bcrypt.compare(req.body.password, user.password)) {
        const payload = {
          _id : user._id,
          name : user.name,
          email : user.email
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn : 1440
        });
        res.send(token);
      } else {
        res.json({error: 'User does not exist' });
      }
    } else {
      res.json({ error: 'User does not exist' });
    }
  }).catch(err => {
    res.send('error: ' + err);
  });
});

router.get('/profile', (req, res) => {
  let decoded = jwt.verify(req.headers['authorization'], process. env.SECRET_KEY);

  User.findOne({
    _id : decoded._id
  }).then(user => {
    if(user) {
      res.json(user);
    } else {
      res.send('User does not exist');
    }
  }).catch(err => {
    res.send('error ' + err);
  })
})

module.exports = router;