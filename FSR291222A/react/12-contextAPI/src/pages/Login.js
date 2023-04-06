import { useContext, useState } from "react"

import AuthContext from "../contexts/auth-context"

function Login() {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({ username: '', password: '' })

  // const handleChangeUsername = (name) => {
  //   setForm({
  //     username: name,
  //     password: form.password
  //   })
  // }
  // const handleChangePassword = (pw) => {
  //   setForm({
  //     username: form.username,
  //     password: pw
  //   })
  // }

  const handleChange = (key, value) => setForm({ ...form, [key]: value })

  return <form className="Login">
    {/* <input type="text" onChange={(e) => handleChangeUsername(e.target.value)} /> */}
    <input type="text" onChange={(e) => handleChange('username', e.target.value)} />
    <br />
    {/* <input type="password" onChange={(e) => handleChangePassword(e.target.value)} /> */}
    <input type="password" onChange={(e) => handleChange('password', e.target.value)} />
    <br />
    <button
      disabled={form.username === '' || form.password === ''}
      onClick={() => auth.login(form.username)}
    >
      Login
    </button>
  </form>
}

export default Login;