import React, { useState, useEffect } from 'react';
import BudgetAccordian from './components/Budget/BudgetAccordian'
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
    </div>
  );
}

export default App;