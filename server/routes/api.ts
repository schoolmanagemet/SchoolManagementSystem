import { Request, Response, NextFunction, Router } from "express";

const user = require('../models/users');
//const express = require('express');


const router = Router();
router.get('/', function (req: Request, res: Response) {
  res.send('api works');
});

//  Router.get('/', function (req, res) {
//   console.log('getting users data');
//   user.find({}).exec(function (err, users) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.json(users)
//     }
//   })
// })

// Router.get('/:userId', function (req, res) {
//   console.log('getting single user data');
//   user.findById(req.params.userId).exec(function (err, users) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.json(users)
//     }
//   })


// })

// Router.delete('users/delete/:id', function (req, res) {
//   console.log('deleting user' + req.params.id );
//   user.remove({_id:req.params.id}).exec()
//   .then(res => {
//     res.status(200).json({
//       message:"user deleted"
//     })
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error:err
//     })
    
//   })
   
// })


module.exports = router;