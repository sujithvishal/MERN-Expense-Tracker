const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction')

router.get('/',async (req,res)=>{
    try{
        const transactions = await Transaction.find();

        res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        });
    }catch(err){
        res.status(500).json({
            success:false,
            error:'Server Error'
        })
    }

})
router.post('/',async (req,res)=>{

    try{
        const {text,amount} = req.body;
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();

        res.status(201).json({
            success:true,
            data:newTransaction
        })

    }catch(err){
        res.status(500).json({
            success: false,
            error: 'Server Error'
          });

    }
    
})
router.delete('/:id',async (req,res)=>{
    try{
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            res.status(404).json({
                success:false,
                error:" No transaction found"
            });
        }else{
            await transaction.remove();
            res.status(200).json({
                success:true,
                data:{}
            });

        }
    }catch(err){
        res.status(500).json({
            success:false,
            error:'Server Error'
        })
    }

    
})

module.exports = router;