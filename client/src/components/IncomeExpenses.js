import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const IncomeExpenses =() =>{
    const {transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction=>transaction.amount);

    const income = amounts.filter(item=>item>0).reduce((tot,item)=>(tot+=item),0);
    const expense = amounts.filter(item=>item<0).reduce((tot,item)=>(tot+=item),0);

    return (
        <div className="incexp">
            <div className="income">
                <h1>Income</h1>
                <h2>${income}</h2>
            </div>
            <div className="expense">
                <h1>Expense</h1>
                <h2>${expense}</h2>
            </div>
        </div>
    )
}