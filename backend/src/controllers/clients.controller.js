const Client = require('../models/Client');

const clientsCtrl = {};

clientsCtrl.getClients = async (req, res)=>{
    const clients = await Client.find();
    res.json(clients);
}

clientsCtrl.oneClient = async (req, res) => {
    const client = await Client.findById(req.params.id);
    res.json(client);
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
                    res.json({ client: client + ' Registered!' })
                }).catch(err =>{
                    res.send('error: ' + err)
                });
        }else{
            res.json({ error: 'Usuario ya existe' })
        }
        
    }).catch(err => {
        res.send('error: ' + err)
    });
}

module.exports = clientsCtrl;