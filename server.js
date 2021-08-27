const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const transactions = require('./routes/transactions')

const app = express();

const PORT = process.env.PORT || 5000
//mongodb connection
mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(data=> app.listen(PORT,()=>console.log('Mongodb connected ,server running..')))
.catch(err=>{
    console.log('Error:'+err.message);
    process.exit(1)
})

app.use(express.json());

//routes
app.use('/api/transactions',transactions);




