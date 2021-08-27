import React from 'react';
import {Navbar} from './components/Navbar'
import {Header} from './components/Header'
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalContext';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

import "./app.css";

function App(){
    return (
        <GlobalProvider>
          <Router>
          <div className="container">
                <Navbar />
                <Header />
            <Switch>
                <Route path="/" exact >
                <Balance />
                </Route>
                <Route path="/income-expense">
                    <IncomeExpenses />
                </Route>
                <Route path="/history">
                    <TransactionList />
                </Route>
                <Route path="/addtransaction">
                    <AddTransaction />
                </Route>
    
            </Switch>
          </div>
          </Router>
        </GlobalProvider>
      );

   
}

export default App;