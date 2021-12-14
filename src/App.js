import React, { useState, useEffect } from 'react';
//import Nav from './components/Home/Nav';
//import Budget from './components/Budget/Budget';
// import ExpenseIndex from './components/Expense/ExpenseIndex'
// import IncomeIndex from './components/Income/IncomeIndex'
import BudgetAccordian from './components/Budget/BudgetAccordian'
import { Button } from 'reactstrap';
import Auth from './components/Auth/Auth';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Button onClick = {clearToken}>Clear Token</Button>
    : <Auth updateToken = {updateToken} />)
  }

  return(
    <div>
      {protectedViews()}
    </div>
  );
}

export default App;