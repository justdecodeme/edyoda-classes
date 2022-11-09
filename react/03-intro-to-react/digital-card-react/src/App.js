import './App.css';

import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Connect from "./components/Connect";

let hexString = "0123456789abcdef";
let randomColor = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
}
let generateGrad = () => {
  let colorOne = randomColor();
  let colorTwo = randomColor();

  return `linear-gradient(${colorOne}, ${colorTwo})`;
}

function App() {

  return (
    <div className="wrapper" style={{ background: generateGrad() }}>
      <Profile />
      <Contact />
      <Connect />
    </div>
  );
}

export default App;
