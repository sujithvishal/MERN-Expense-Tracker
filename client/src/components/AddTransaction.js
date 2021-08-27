import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const AddTransaction =() =>{
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();
        if(text==''||amount==0){
            alert('enter valid data')
            return ;
        }

        const newTransaction = {
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }
    return (
        <div className="newTrans">
            <h3>Add new transaction </h3>
            <form onSubmit={onSubmit} className="form" >
            <label htmlFor='text'>Text</label>
            <input type="text" value={text} className="form-control" onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
            <label htmlFor='Amount'>Amount<br /> (negative - expense, positive - income)</label>
            <input type="number" value={amount} className="form-control" onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
            <br /> 
            <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}