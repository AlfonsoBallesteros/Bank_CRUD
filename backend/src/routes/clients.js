const { Router } = require('express');
const router = Router();

const { getClients, addClient, oneClient } = require('../controllers/clients.controller')

router.route('/')
        .get(getClients)
        .post(addClient);
router.route('/:id')
        .get(oneClient)

module.exports = router;