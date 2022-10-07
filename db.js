const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.URI_ATLAS,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log("Banco de dados conectado com sucesso!");
    })
}

module.exports = connectDB;