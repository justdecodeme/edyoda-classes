import classes from "./Header.module.scss"

function Header() {
  return (
    <header className={classes.Header}>
      <nav>
        <a href="#">Ecommerce Store</a>
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Admin</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;