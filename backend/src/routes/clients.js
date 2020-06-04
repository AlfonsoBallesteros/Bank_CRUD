const { Router } = require('express');
const router = Router();

const { getClients } = require('../controllers/clients.controller')

router.route('/')
        .get(getClients)

module.exports = router;