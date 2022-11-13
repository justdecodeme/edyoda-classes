import './App.css';

import Button from './components/Button'

let btns = ['%', '+/-', 'c', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, ',', '=']

let Buttons = btns.map((btn, i) => {
  return <Button symbol={btn} key={i} />
})

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value="123" />
        {Buttons}
      </div>
    </div>
  );
}

export default App;
