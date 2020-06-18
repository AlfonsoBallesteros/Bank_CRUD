const {Schema, model} = require('mongoose');
//Math.floor(Math.random() * (4582981099999999 - 4582981000000000) ) + 4582981000000000;

// newDate -> date-exp = (date.mouth) -> ramdon, date.year + 4 - 2000
const accountSchema = new Schema({
    client:{
        type:Schema.Types.ObjectId,
        ref: 'Client',
    },
    type_account:{
        type: String
    },
    number_account:{
        type: String
    },
    date_due:{
        type: Object //{ year:24, mouth:5} -> 24/5
    },
    ccv:{
        type: Number,
        max: 1000,
        default: function(){
            return Math.floor(Math.random() * (999- 100) ) + 100;
        }
    },
    saldo:{
        type: Number,
        max: 1000000000
    },
    state:{
        type: Boolean
    },
    token: {
        type:String
    }
},{
    timestamp: true
});

module.exports = model('Account', accountSchema);