import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';


export const Transaction = ({transaction}) =>{
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount<0 ? '-' : '+';

    return (
        <li className={transaction.amount<0 ? 'minus' : 'plus'} >
            {transaction.text} <span>{sign}${transaction.amount}</span>
            <button onClick={()=>deleteTransaction(transaction._id)} className="btn btn-danger" >X</button>
        </li>
    )
}