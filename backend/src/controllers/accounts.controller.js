const Account = require('../models/Account');
const auth = require('./auth.controller')

const accountCtrl = {};

accountCtrl.getAccounts = async (req, res)=>{
    const account = await Account.find({client: req.userId})
        res.status(200).json(account)
}

accountCtrl.addAccount = (req, res)=>{
    const {type_account} = req.body;
    const client = req.userId;

    const newAccount = Account({
        client,
        type_account,
        number_account: Math.floor(Math.random() * (4582981099999999 - 4582981000000000) ) + 4582981000000000,
        date_due: {
            month: new Date().getMonth() + 2,
            year:  new Date().getFullYear() + 4
        },
        saldo: 0,
        state: true
    })

    Account.create(newAccount)
        .then(account =>{
            //res.status(200).json({msg:'Cuenta creada',cuenta: account});
            const token = auth.accounToken(newAccount);
            Account.updateOne({number_account: newAccount.number_account}, {token: token.token})
            .then(suc =>{
                res.status(200).json('Cuenta creada');
            }).catch(err => {
                res.status(500).json({msg:'Hay un problema al crear la cuenta', error: err});
            })
        }).catch(err =>{
            res.status(500).json({msg:'Hay un problema al crear la cuenta', error: err});
        });
}

accountCtrl.getOneAccount = async(req, res) =>{
    const account = await Account.findOne({_id:req.accountId, client: req.userId})
    res.status(200).json(account)
}

accountCtrl.changeSaldo = async (req, res) =>{
    const {saldo} = req.body;
    const account = await Account.findOneAndUpdate({_id: req.accountId, client: req.userId}, {saldo})
    .then(suc =>{
        res.status(200).json('Transferencia realizada')
    }).catch(err=>{
        res.status(500).json({msg:'Hay un problema', error: err});
    });
}

accountCtrl.removeAccount = async (req, res) =>{
    const account = await Account.findOneAndDelete({_id: req.accountId, client: req.userId})
    .then(suc =>{
        res.json('Cuenta Eliminada')
    }).catch(err => {
        res.status(500).json({msg:'Hay un problema', error: err});
    })
}

module.exports = accountCtrl; 