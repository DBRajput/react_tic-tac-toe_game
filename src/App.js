import logo from './tic-tac-toe.png';
import './App.css';
import { useState } from 'react';

function Square({value}) {
  const[val,setVal] = useState(null);
  function handleClick() {
    setVal(value);
  }
  return (
    <>
      {/* <button style={{height: '60px', width : '60px'}} onClick={handleClick}>{val}</button> */}
      <button className='btn' onClick={handleClick}>{val}</button>
    </>
  )
}

function Board() {
  return <>
    <div className='Board'>
        <Square value='1'/>
        <Square value='2'/>
        <Square value='3'/>
    </div>
    <div className='Board'>
        <Square value='4'/>
        <Square value='5'/>
        <Square value='6'/>
    </div>
    <div className='Board'>
        <Square value='7'/>
        <Square value='8'/>
        <Square value='9'/>
    </div>
  </>
}

function App() {
  return (
    <div className="App" style={{backgroundColor:'#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height:'150px', width:'150px'}} />
        <h3>React Tic-Tac-Toe Game</h3>
      </header>
      <div className="Game-Board">
        <Board/>
      </div>
    </div>
  );
}

export default App;
