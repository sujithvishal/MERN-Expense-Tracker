import React,{useContext} from 'react';
import {Transaction} from './Transaction';
import { GlobalContext } from '../context/GlobalContext';

export const TransactionList = () =>{
    const {transactions} =useContext(GlobalContext);

    return (
        <div className="history">
            <h3>History</h3>
            <ol className="list">
            {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
            </ol>
        </div>
    )
}