const { Router } = require('express');
const router = Router();
const auth = require('../controllers/auth.controller')

const { getAccounts, addAccount, changeSaldo, removeAccount, getOneAccount} = require('../controllers/accounts.controller')

router.route('/')
        .get(
        //auth.verifyAccount,
        auth.verifyToken,
        getAccounts)
        .post(
        auth.verifyToken,
        addAccount);

router.route('/one')
        .get(
        auth.verifyAccount,
        auth.verifyToken,
        getOneAccount
        )
        .put(
        auth.verifyToken,
        auth.verifyAccount,
        changeSaldo)
        .delete(
        auth.verifyToken,
        auth.verifyAccount,
        removeAccount);

module.exports = router;