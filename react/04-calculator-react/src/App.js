import './App.css';
import { useState } from "react";
import Button from './components/Button'

let btns = ['%', '+/-', 'c', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, ',', '=']

// let Buttons = btns.map((btn, i) => {
//   return <Button symbol={btn} key={i} showResult={showOutput} />
// })

function App() {
  const [result, setResult] = useState("")

  const showOutput = (output) => {
    setResult(output);
  }

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={result} />
        {btns.map((btn, i) => {
          return <Button symbol={btn} key={i} showResult={showOutput} />
        })}
      </div>
    </div>
  );
}

export default App;
