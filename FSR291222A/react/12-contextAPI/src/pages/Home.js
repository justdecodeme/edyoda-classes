import { useContext } from "react"

import AuthContext from "../contexts/auth-context"

function Home() {
  const auth = useContext(AuthContext)

  return <div className="Home">
    <h2>Home Page</h2>
    <br />
    <p>Logged in user: {auth.user}</p>
  </div>
}

export default Home;
