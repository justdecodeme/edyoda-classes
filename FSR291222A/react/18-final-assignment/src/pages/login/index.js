import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./index.scss"
import AuthContext from "../../contexts/auth-context";

function Index() {
  const navigate = useNavigate()
  const { login, data } = useContext(AuthContext);

  if (data) {
    var { email, password, name } = data.accountsPage.Admin;
  }
  // console.log(email, password) // eduardfranz@gmail.com jvoxidf09234
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState(null)

  const handelChange = (key, value) => {
    setError(null)

    setForm({
      ...form,
      [key]: value
    })
  }
  const handelLogin = () => {
    if (form.email === '' || form.password === '') {
      setError('email and password can\'t be empty!')
    } else {
      if (form.email === email && form.password === password) {
        login(name)
        navigate('/dashboard')
      } else {
        setError('email and password do not match!')
      }
    }
  }

  return <div className="login_page wrapper_box">
    <h3>Welcome to the Dashboard, Login</h3>
    {error && <p className="error">{error}</p>}
    <label htmlFor="email">Email</label>
    <input type="text" id="email" onChange={(e) => handelChange('email', e.target.value)} />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" onChange={(e) => handelChange('password', e.target.value)} />
    <button className="primary_btn" onClick={() => handelLogin()}>Login</button>
  </div>;
}

export default Index;