import * as express from 'express';
import * as bodyParser from 'body-parser';
import { model,mongoose,Schema,connect } from "mongoose";


connect('mongodb://localhost:27017/SchoolManage',{ useNewUrlParser: true }, (err) => {
    if(!err){

        console.log("connected successfully");
        
    }
    else{

        console.log("error error" + JSON.stringify(err));
        
    } 

})

module.exports = mongoose;