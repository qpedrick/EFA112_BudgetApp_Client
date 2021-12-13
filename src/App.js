import React, { useState, useEffect } from 'react';
import Nav from './components/Home/Nav';
import Budget from './components/Budget/Budget';
import ExpenseIndex from './components/Expense/ExpenseIndex'
import IncomeIndex from './components/Income/IncomeIndex'

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
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return(
    <div>
      <Nav clickLogout = {clearToken} />
    </div>
  );
}

export default App;