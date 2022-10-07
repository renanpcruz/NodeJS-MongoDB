const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor digite o nome do produto']        
    },    
    price: {
        type: Number,
        default: 0.00,
        required: [true, 'Por favor digite o valor do produto']        
        
    },
    quant: {
        type: Number,
        required: [true, 'Por favor digite a quantidade do produto']       
    },

    un: {
        type: String,
        required: [true, 'Por favor digite a unidade do produto']       
    },

    category: {
        type: String,        
        enum: {
            values: [
                'Selecione...',
                'Notebooks',
                'Desktops',
                'Tablets',
                'Impressoras'              
            ],           
        }    
    },   
   
    createdAt: {
        type: Date,
        default: Date.now
    },
    
})

module.exports = mongoose.model('Produto', produtoSchema);