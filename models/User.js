const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    googleID:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true
    },
    firstName:{
        type: String,
        require: false
    },
    lastName:{
        type: String,
        require: false
    },
    image:{
        type: String
    }
});

// Create collection and add schema
mongoose.model('users', UserSchema);