
let expre = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/users')
const cors = require('cors')
const router = expre.Router();

process.env.SECRET_KEY = 'secret'

 

router.use(cors())

router.get('/api/', function (req: Request, res) {
  res.send('api is working')
})


router.post('/api/signup', (req, res) => {

  const today = new Date();
  const userVals = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    post: req.body.post,
    date: today,
    isAdmin: req.body.isAdmin

  }

  console.log(userVals.email + userVals.password);

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userVals.password = hash
          User.create(userVals)

        })
          .then(user => {
            res.json({ status: userVals.password })

          })
          .catch(err => {
            res.json('error: ' + err)

          })
      }

      else {

        res.json({ error: 'user already exist' })
      }

    })



})

router.get('/api/profile', (req, res) => {
  let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  User.findOne({ _id: decoded.id })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send("user does not exist")
      }

    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


router.post('/api/login', (req, res) => {
  User.findOne({
    email: req.body.email
    })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.last_name,
            post: user.post,
            password: user.password,
            isAdmin: user.isAdmin
          }

          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1400
          })

          res.json(token)
        } else {
          res.json('Password is Wrong')
        }

      } else {
        res.send('Please Check Username')
      }

    })
    .catch(err => {

      res.send('error : ' + err)
    })
})


module.exports = router;