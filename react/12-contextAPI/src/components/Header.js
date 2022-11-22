import { useContext } from "react"

import AuthContext from "../contexts/auth-context"

function Header() {
  const auth = useContext(AuthContext)

  return <div className="Header">
    <nav>
      <h4>React - Context API</h4>
      {auth.user &&
        <ul>
          <li><a href="#">Hi, {auth.user}</a></li>
          {/* <li><a href="#" onClick={() => auth.logout()}>Logout</a></li> */}
          <li><a href="#" onClick={auth.logout}>Logout</a></li>
        </ul>
      }
    </nav>
  </div>
}

export default Header;

// if (2 == 4 && 3 == 2) // false