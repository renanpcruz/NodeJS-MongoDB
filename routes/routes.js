const express = require('express');
const router = express.Router();

//clientes
const {
    newClient,
    listClients,
    updateClients,
    delClients
} = require('../controllers/clienteControllers');

router.route('/clientes/new').post(newClient); 
router.route('/clientes/list').get(listClients);
router.route('/clientes/update/:id').put(updateClients);
router.route('/clientes/del/:id').delete(delClients);

//produtos
const {
    newProduct,
    listProduct,
    updateProduct,
    delProduct
} = require('../controllers/produtosControllers');

router.route('/produtos/new').post(newProduct); 
router.route('/produtos/list').get(listProduct);
router.route('/produtos/update/:id').put(updateProduct);
router.route('/produtos/del/:id').delete(delProduct);

//usuarios
const {
    newUser, 
    loginUser
     
} = require('../controllers/authController');

router.route('/usuarios/new').post(newUser); 
router.route('/usuarios/login').post(loginUser); 

module.exports = router;

