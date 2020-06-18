const Client = require('../models/Client');
const auth = require('./auth.controller')

const clientsCtrl = {};

clientsCtrl.oneClient = async (req, res) => {
    const client = await Client.findById(req.userId, { password: 0});
    if (!client) {
        return res.status(404).json({msg: "Ningún usuario encontrado."});
    }else{
        res.status(200).json(client);
    }   
}

clientsCtrl.addClient = (req, res) => {
    //recuperamos los datos que viene de la vista
    const {name, lastname, type_document, document, date_exp_docuement, address, number_phone, date_born, email, password} = req.body;
    const newClient = new Client({
        name, 
        lastname, 
        type_document, 
        document, 
        date_exp_docuement, 
        address, 
        number_phone, 
        date_born, 
        email, 
        password
    });
    Client.findOne({
        document
    }).then(client => {
        if(!client){
           
           Client.create(newClient)
                .then(client => {
                    //res.json({ client: client + ' Registered!' })
                    const token = auth.generateToken(newClient);
                    res.json(token)
                }).catch(err =>{
                    res.status(500).json({msg:'Hay un problema al registrarte', error: err});
                });
        }else{
            res.status(500).json({error: 'Usuario ya existente'});
        }
        
    }).catch(err => {
        res.status(500).json({msg:'Hay un problema al registrarte', error: err});
    });
}

clientsCtrl.signin = async (req, res) => {
    const client = await Client.findOne({document: req.body.document})
    if(!client) {
        return res.status(404).send("La cedula no existe")
    }

    const validPassword = await client.comparePassword(req.body.password, client.password);
    if (!validPassword) {
        return res.status(401).json({msg:'Contraseña invalida', auth: false, token: null});
    }
    
    const token = auth.generateToken(client);
    res.status(200).json(token)
}

clientsCtrl.logout = (req, res) => {
    res.status(200).json({msg:'Cerrado sesion', auth: false, token: null });
}

clientsCtrl.updateClient = async (req, res) =>{
    const {name, lastname, address, number_phone, email, password} = req.body;
    await Client.findOneAndUpdate({_id: req.userId},{
        name, 
        lastname,  
        address, 
        number_phone,
        email, 
        password
    }).then(suc =>{
        res.status(200).json('Usuario Actualizado');
    }).catch( err =>{
        res.status(500).json({msg:'Hay un problema al actualizar', error: err});
    })
    //findById(req.userId, { password: 0});
    
}

module.exports = clientsCtrl;