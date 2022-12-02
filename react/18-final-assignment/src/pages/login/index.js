import "./index.scss"

function index() {
  return <div className="login_page wrapper_box">
    <h3>Welcome to the Dashboard, Login</h3>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" />
    <label htmlFor="password">Password</label>
    <input type="text" id="password" />
    <button className="primary_btn">Login</button>
  </div>;
}

export default index;