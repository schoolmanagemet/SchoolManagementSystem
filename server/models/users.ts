import { model, mongoose, Schema } from "mongoose";

const userScheema = new Schema({
    first_name: {
        type: String
    },
    last_name: String,
    email: String,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    post: String,
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: Boolean
});

module.exports = model('user', userScheema, 'users');  