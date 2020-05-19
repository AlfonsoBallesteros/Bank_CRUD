const {Schema, model} = require('mongoose');

const clientSchema = new Schema({
    name:{
        type: String
    },
    lastname:{
        type: String
    },
    type_document:{
        type: String
    },
    document:{
        type: String
    },
    date_exp_docuement:{
        type: Date
    },
    address:{
        type: String
    },
    number_phone:{
        type: Number,
        max: 12
    },
    date_born:{
        type: Date
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
},{
    timestamp: true
});

module.exports = model('Client', clientSchema);