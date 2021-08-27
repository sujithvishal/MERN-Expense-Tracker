import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {Link} from "react-router-dom"



export const Balance =()=>{

  const {transactions,getTransactions} = useContext(GlobalContext);

  useEffect(()=>{
    getTransactions();
    console.log('daata useeffect')
  },[])
  
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      {total<0 ? <h2 className="loss">-${total*-1}</h2> : <h2 className="profit">+${total} </h2>}
   
    <Link to="/addtransaction" className="btn btn-light">Add Trans</Link>
    </div>
  )
}