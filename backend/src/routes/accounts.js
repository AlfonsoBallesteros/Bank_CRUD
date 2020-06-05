const { Router } = require('express');
const router = Router();

const { getAccounts } = require('../controllers/accounts.controller')

router.route('/')
        .get(getAccounts)

module.exports = router;