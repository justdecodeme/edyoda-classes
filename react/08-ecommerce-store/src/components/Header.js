import { Link, NavLink } from "react-router-dom"
import { useEffect, useRef } from "react"

import "./Header.scss"

function Header() {
  const myNav = useRef();

  // useEffect(() => { // for side Effects
  //   console.log(myNav.current)
  //   // myNav.current.innerText = "xyz..."
  // })

  return (
    <header className="Header">
      <nav ref={myNav}>
        {/* <a href="/">Ecommerce Store</a> */}
        <Link to="/">Ecommerce Store</Link>
        <ul>
          <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'highlight' : ''}>Shop</NavLink></li>
          <li><NavLink to="/wishlist" className={({ isActive }) => isActive ? 'highlight' : ''}>Wishlist</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'highlight' : ''}>About</NavLink></li>
          {/* <li><Link to="#">Orders</Link></li>
          <li><Link to="#">Cart</Link></li>
          <li><Link to="#">Admin</Link></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header;