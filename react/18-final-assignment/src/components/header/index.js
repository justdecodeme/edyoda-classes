import "./index.scss"

function index() {
  return <header>
    <a href="#">Product Admin</a>
    <nav>
      <ul>
        <li><a className="active" href="#"><i className="fas fa-tachometer-alt"></i>
          Dashboard</a></li>
        <li><a href="#"><i className="fa-solid fa-cart-shopping"></i>Products</a></li>
        <li><a href="#"><i className="fa-regular fa-user"></i>Accounts</a></li>
      </ul>
    </nav>
    <p>Admin, <a href="#">Logout</a></p>
  </header>;
}

export default index;