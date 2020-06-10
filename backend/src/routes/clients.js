const { Router } = require('express');
const router = Router();
const auth = require('../controllers/auth.controller')

const {  addClient, oneClient, signin, logout} = require('../controllers/clients.controller');

router.route('/')
        .post(addClient);
router.route('/me')
        .get(
        auth.verifyToken,
        oneClient
        );

router.route('/login')
        .post(signin);

router.route('/logout')
        .post(logout);       

module.exports = router;