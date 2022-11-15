/* ****************** */
/* syntax */
/* ****************** */

// import React from "react";

// class ClassComponent extends React.Component {
//   render() {
//     return (
//       <h3>Class Component</h3>
//     );
//   }
// }

// export default ClassComponent;

/* ⚠️ Notice the above syntax, how it is different from functional components! */


/* ****************** */
/* counter app */
/* ****************** */

import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
    this.state = {
      count: 0
    };
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
    this.props.updateTotal(1)
  }

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Add</button>
        {/* ❓Can you add `Remove` button? */}
      </div>
    )
  }
}

export default ClassComponent;