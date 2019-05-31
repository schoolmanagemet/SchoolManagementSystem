
import { jwt } from "jsonwebtoken";

const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/users');
const cors = require('cors')
const router = express.Router();

process.env.SECRET_KEY = 'secret'



router.use(cors())

router.get('/api/signup', function (req: Request, res) {
    res.send('api is working') 
})


router.post('/api/signup',  (req, res) => {

  const today = new Date();
  const userVals = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    username : req.body.username,
    password : req.body.password,
    post : req.body.post,
    date : today,
    isAdmin : req.body.isAdmin 

  }

  console.log(userVals.email + userVals.password);
  
  User.findOne({
    email:req.body.email
  })
  .then(user => {
    if(!user){
        bcrypt.hash(req.body.password, 10 , (err, hash) =>{
        userVals.password = hash
        User.create(userVals)

      })
      .then(user => {
        res.json({status: userVals.password})

      })
      .catch(err => {
        res.json('error: ' + err)

      })
    }

    else{

      res.json({error: 'user already exist' })
    }

  })



})



  module.exports = router;