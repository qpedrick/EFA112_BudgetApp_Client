import React, { useState, useEffect } from 'react';
//import Nav from './components/Home/Nav';
//import Budget from './components/Budget/Budget';
// import ExpenseIndex from './components/Expense/ExpenseIndex'
// import IncomeIndex from './components/Income/IncomeIndex'
import Footer from './components/site/Footer';
import BudgetAccordian from './components/Budget/BudgetAccordian'
//import { Button } from 'reactstrap';
import Auth from './components/Auth/Auth';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ?
      <BudgetAccordian sessionToken={sessionToken} clearToken={clearToken} />
      : <Auth updateToken={updateToken} />)
  }

  return (
    <div>
      {protectedViews()}
      <Footer/>
    </div>
  );
}

export default App;