const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor digite seu nome']        
    },    
    email: {
        type: String,
        required: [true, 'Por favor digite seu e-mail'],
        unique: true
        
    },
    road: {
        type: String,
        required: [true, 'Por favor digite a rua/avenida']
        
    },
    number: {
        type: String,
        required: [true, 'Por favor digite o número da residência']
        
    },
    code_postal: {
        type: String,
        required: [true, 'Por favor digite o cep']
        
    },
    city: {
        type: String,
        required: [true, 'Por favor digite a cidade']      
    },
    state: {
        type: String,
        required: [true, 'Por favor digite o estado']        
    },

    cell: {
        type: String,
        required: [true, 'Por favor digite um número de celular']   
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
})

module.exports = mongoose.model('Cliente', clienteSchema);
