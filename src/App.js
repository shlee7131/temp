/* eslint-disabled */
import './App.css';
import axios from 'axios';
import NavbarTemplate from './components/NavbarTemplate';
import Transaction from './components/Transaction';
import TransactionHistory from './components/TransactionHistory';
import Balance from './components/Balance';
import { Nav, Card, TabPane } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import SimpleTab from './components/SimpleTab';


const App = () => {
  return (
    <div>
      <NavbarTemplate></NavbarTemplate>
      <Route exact path="/">
      <Balance></Balance>
      <hr />
      <div className='container'>
        <div className='row'>
          <Transaction></Transaction>
        </div>
      </div>
      <hr/>
      <TransactionHistory></TransactionHistory>
      </Route>
      <Route exact path="/status">
        <SimpleTab></SimpleTab>
      </Route>
    </div>
  );
}

export default App;
