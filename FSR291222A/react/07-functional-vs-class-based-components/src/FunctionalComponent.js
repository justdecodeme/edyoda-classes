/* ****************** */
/* syntax */
/* ****************** */

// function FunctionalComponent() {
//   return (
//     <h3>Functional Component</h3>
//   );
// }

// export default FunctionalComponent;

/* ⚠️ Notice the above syntax, how it is different from class components! */


/* ****************** */
/* counter app */
/* ****************** */

import { useState } from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    props.updateTotal(1);
  }


  return (
    <div>
      <h3>Functional Component</h3>
      <p>Count: {count}</p>
      <button onClick={increase}>Add</button>
      {/* ❓Can you add `Remove` button? */}
    </div>
  )
}

export default FunctionalComponent;
