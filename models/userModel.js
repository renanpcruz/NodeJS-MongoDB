const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor digite seu nome'],
        maxLength: [30, 'Nome de usuário não pode exceder de 30 caracteres']
    },
    email: {
        type: String,
        required: [true, 'Por favor digite seu e-mail'],
        unique: true
        
    },
    password: {
        type: String,
        required: [true, 'Por favor digite sua senha'],
        minlength: [6, 'Sua senha não pode ter menos que 6 caracteres']
        
    },   
   
    createdAt: {
        type: Date,
        default: Date.now
    }    
})

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Return JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

module.exports = mongoose.model('User', userSchema);
