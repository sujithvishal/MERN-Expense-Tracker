const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        required:[true,'please add valid data']    
    },
    amount: {
        type: Number,
        required:[true,'please add valid amount']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Transaction',TransactionSchema);
