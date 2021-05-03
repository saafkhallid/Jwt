const mongoose = require('mongoose');
const crypto = require('crypto');
const { v1: uuid } = require('uuid');

const userSchema = new mongoose.Schema({
    first_name: {
    
        type: String,
        required: true,
        maxlength: 50,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cin: {
        type: String,
        lenght: 8
    },
    phone: {
        type: Number,
        trim: true
    },
    role: {
        type: String,
        enum: ['User', 'Admin', 'Tech'],
        default: 'User',
    },


}, { timestamps: true })



module.exports = mongoose.model('User', userSchema);