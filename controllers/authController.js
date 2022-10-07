const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');

// Registrando usuário  
exports.newUser = async (req, res, next) => {
    
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password  
    })

    sendToken(user, 200, res)

}

// Login usuário

// Login usuário
exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    // verificando e-mail e senha
    if (!email || !password) {
        res.status(400).json({
            message: 'Por favor digite e-mail e senha'
        })
    }

    // procurando usuário no BD
    const user = await User.findOne({ email })
    const passwd = await User.findOne({password})

    if (!user || !passwd) {
        res.status(401).json({
            message: 'E-mail ou senha incorretos'
        })
    }    
    
    
    sendToken(user, 200, res)
}