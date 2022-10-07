// Criar e enviar token e salvar nos cookies
const sendToken = (user, statusCode, res) => {

    // criando token
    const token = user.getJwtToken();

    // opções cookie
    // quantas horas tem um dia? Quantos minutos tem uma hora? 
    // Quantos segundos tem um minuto? Quanto milésimos tem um segundo?
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        // evitar que os cookies sejam visualizados
        httpOnly: true
    }


    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })

}

module.exports = sendToken;