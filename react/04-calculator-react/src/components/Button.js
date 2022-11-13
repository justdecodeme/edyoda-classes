import "./Button.css"

let n1 = '';
let n2 = '';
let operator = '';
let result = '';

function Button(props) {

  function getInput(e) {
    let inputValue = e.target.innerText;

    if (inputValue == "+" || inputValue == "-" || inputValue == "*" || inputValue == "/") {
      operator = inputValue;
    } else if (operator !== '' && inputValue != "=") {
      n2 += inputValue;
    } else if (inputValue != "=") {
      n1 += inputValue;
    } else if (inputValue === "c") {
      n1 = '';
      n2 = '';
      operator = '';
      result = '';
    } else if (inputValue === "=") {
      result = eval(`${+n1} ${operator} ${+n2}`);
      console.log(result)
      n1 = '';
      n2 = '';
      operator = '';
      result = '';
    }

    console.log(`${n1} ${operator} ${n2}`)

  }

  return <button className={props.symbol === "=" ? 'equal' : ''} onClick={getInput}>{props.symbol}</button>
}

export default Button;



