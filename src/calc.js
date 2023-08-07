import logo from './logo.svg';
import './App.css';

import react, { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0,- 1));
  }
  const calculate = () => {
    setResult(eval(result).toString()); 
  }
  return (
    
   <>
      <div className='container'>
          <form>
            <input className='text1' type='text' value={result} />
          </form>

          <div className='keypad'>
            <button className='highlight' onClick={clear} id="clear">clear</button>
            <button className='highlight' onClick={backspace} id="backspace">c</button>
            <button className='button1' name="/" onClick={handleClick}>&divide;</button>
            <button className='button1' name="7" onClick={handleClick}>7</button>
            <button className='button1' name="8" onClick={handleClick}>8</button>
            <button className='button1' name="9" onClick={handleClick}>9</button>
            <button className='highlight b' name="*" onClick={handleClick}>&times;</button>
            <button className='button1' name="4" onClick={handleClick}>4</button>
            <button className='button1' name="5" onClick={handleClick}>5</button>
            <button className='button1' name="6" onClick={handleClick}>6</button>
            <button className='highlight b' name="-" onClick={handleClick}>&ndash;</button>
            <button className='button1' name="1" onClick={handleClick}>1</button>
            <button className='button1' name="2" onClick={handleClick}>2</button>
            <button className='button1' name="3" onClick={handleClick}>3</button>
            <button className='highlight b' name="+" onClick={handleClick}>+</button>
            <button className='button1' name="0" onClick={handleClick}>0</button>
            <button className='button1' name="." onClick={handleClick}>.</button>
            <button className='highlight b' onClick={calculate} id="result">=</button>


          </div>
      </div>

   </>
  );
}

export default App;