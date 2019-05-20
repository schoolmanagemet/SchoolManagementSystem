import { Request, Response, NextFunction, Router } from "express";

const express = require('express');
const router = express.Router();
  router.get('/', function(req:Request, res:Response) {
    res.send('api works');
  });


module.exports = router;