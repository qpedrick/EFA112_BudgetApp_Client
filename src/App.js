import React, {useState} from 'react';
//import Nav from './components/Home/Nav';
//import Budget from './components/Budget/Budget';
// import ExpenseIndex from './components/Expense/ExpenseIndex'
// import IncomeIndex from './components/Income/IncomeIndex'
import { Button } from 'reactstrap';
import Auth from './components/Auth/Auth';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [toggle, setToggle] = useState('show signup')

  return(
    <div>
      <Auth/>
      <h3>Menu { toggle }</h3>
      <Button onClick = {(e) => setToggle('show signup')}>Show</Button>
      <Button onClick = {(e) => setToggle('hide signup')}>Hide</Button>
    </div>
  );
}

export default App;