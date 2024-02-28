import './App.css';
import { useState } from 'react';

// function which will print on screen when someone wins
function Winner(props) {
  console.log('Winner Rendered'+props.winner);
  return (
    <div>
      <h2 style={{color:"white"}}>Winner is {props.winner}</h2>
    </div>
  );  
}

// function calculate winner
function calculateWinner(squares) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8], // Horizontal
    [0,3,6], [1,4,7], [2,5,8], // Vertical
    [0,4,8], [2,4,6] // Diagonal
  ];
  for (let i=0; i<lines.length; i++) {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
      Winner({winner:squares[a]});
      return squares[a];
    }
  }
  return null;
}


function Square({value, onSquareClick}) {
  // console.log('Square Rendered'+value);
  return (
    <>
      <button className='btn' onClick={onSquareClick}>{value}</button>
    </>
  )
}

function Board() {
  const[squares, setSquares] = useState(Array(9).fill(null));
  const[xIsNext, setXIsNext] = useState(true);
  const[win, setWin] = useState("~");
  
  function handleClick(index) {
    const nextSquares = squares.slice(); //Slice is used to create Exact array copy of squares.
    if(squares[index]==null && calculateWinner(squares)==null){
      if (xIsNext) {
        nextSquares[index] = "X";
        setXIsNext(false);
      } else {
        nextSquares[index] = "O";
        setXIsNext(true);
      }
      setSquares(nextSquares);
    }else if(calculateWinner(squares)!=null){
      alert('Winner is '+calculateWinner(squares));
      setWin(calculateWinner(squares));
    }
  }

  return <>
    <div className='Board' style={{display:"flex"}}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className='Board' style={{display:"flex"}}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className='Board' style={{display:"flex"}}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    <div>
      <Winner winner={win} />
    </div>
  </>
}

function App() {
  return (
    <div className="App" style={{backgroundColor:'#282c34'}}>
      <header className="App-header">
        <img src="/tic-tac-toe.png" className="App-logo" alt="logo" style={{height:'150px', width:'150px'}} />
        <h3>React Tic-Tac-Toe Game</h3>
      </header>
      <div className="Game-Board">
        <Board/>
      </div>
    </div>
  );
}

export default App;
