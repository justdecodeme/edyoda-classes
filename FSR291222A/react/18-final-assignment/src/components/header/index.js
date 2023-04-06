import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import "./index.scss"
import AuthContext from "../../contexts/auth-context";

function Index() {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext);

  return <header>
    <NavLink to="/">Product Admin</NavLink>
    <nav>
      <ul>
        <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/dashboard"><i className="fas fa-tachometer-alt"></i>
          Dashboard</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/products-list"><i className="fa-solid fa-cart-shopping"></i>Products</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/account"><i className="fa-regular fa-user"></i>Accounts</NavLink></li>
      </ul>
    </nav>
    {user && <p>{user}, <NavLink to="#" onClick={() => {
      logout();
      setTimeout(() => {
        navigate('/login')
      }, 1000);
    }}>Logout</NavLink></p>}
  </header>;
}

export default Index;