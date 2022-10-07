const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

dotenv.config({path: "config.env"});

//app
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

//definindo a pasta
const PORT = process.env.PORT;

//vinculando a porta para subir o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

//verifiacao conexao com o banco
connectDB();