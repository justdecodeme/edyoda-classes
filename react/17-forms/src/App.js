import { useEffect, useState } from "react";
import Error from "./Error"

let initForm = {
  username: '',
  phoneNumber: '',
  email: ''
}

// if username or phoneNumber is empty
//   > isValid = false
// if username & phoneNumber both are filled
//   > isValid = true

function App() {
  const [formData, setFormData] = useState(initForm)
  const [error, setError] = useState(null)
  const [isValid, setIsValid] = useState(false)

  const handSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.username.value)
  }

  const handleChange = (key, value) => {
    // console.log(key, value)
    // check if email is formatted correct abc@gmail.com
    setError(null)

    if (key === "email") {
      let isEmailCorrect = value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/
      );
      if (isEmailCorrect === null) {
        setError('email is invalid')
      }
    }

    setFormData({
      ...formData,
      [key]: value
    })
  }

  useEffect(() => {
    if (formData.username === "" || formData.phoneNumber === "") {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [formData])

  return (
    <form className="App" onSubmit={handSubmit}>
      {/* {error && <p className="error">{error}</p>} */}
      {error && <Error msg={error} />}
      <button type="submit" disabled={!isValid || error}>Submit</button>
      <br />
      <button onClick={() => setFormData(initForm)}>Reset</button>
      <br />
      {/* <input type="text" name="username" placeholder="username" defaultValue={"justdecodeme"} onChange={(e) => handleChange("username", e.target.value)} /><br /> */}
      <input type="text" value={formData.username} name="username" placeholder="username" onChange={(e) => handleChange("username", e.target.value)} /><br />
      <input type="number" value={formData.phoneNumber} name="phoneNumber" placeholder="Phone Number" onChange={(e) => handleChange("phoneNumber", e.target.value)} /><br />
      <input type="email" value={formData.email} name="email" placeholder="email" onChange={(e) => handleChange("email", e.target.value)} /><br />
      <input type="password" name="password" placeholder="password" /><br />
      <input type="date" name="dob" /><br />
      <div>
        <h2>Skills</h2>
        <input type="checkbox" name="skill" id="html" value="html" />
        <label htmlFor="html" title="HyperText Markup Language">HTML</label><br />

        <input type="checkbox" name="skill" id="css" value="css" />
        <label htmlFor="css">CSS</label><br />

        <input type="checkbox" name="skill" id="sass" value="sass" />
        <label htmlFor="sass">Sass</label><br />

        <input type="checkbox" name="skill" id="js" value="js" />
        <label htmlFor="js">JS</label><br />

        <input type="checkbox" name="skill" id="react" value="react" />
        <label htmlFor="react">React</label><br />

      </div>
      <div>
        <h2>Rating (FED)</h2>
        <input type="radio" name="rating" id="awesome" value="awesome" />
        <label htmlFor="awesome">Awesome</label><br />

        <input type="radio" name="rating" id="good" value="good" />
        <label htmlFor="good">Good</label><br />

        <input type="radio" name="rating" id="average" value="average" />
        <label htmlFor="average">Average</label><br />

        <input type="radio" name="rating" id="notHappy" value="notHappy" />
        <label htmlFor="notHappy">Not Happy</label><br />

        <input type="radio" name="rating" id="sad" value="sad" />
        <label htmlFor="sad">Sad</label><br />

      </div>
      <br />
      <div>
        <h2>Gender</h2>
        <input type="radio" name="gender" id="male" value="m" />
        <label htmlFor="male">Male</label>

        <input type="radio" name="gender" id="female" value="f" />
        <label htmlFor="female">Female</label>
      </div>
      <br />
      <select name="favTopic" id="favTopic">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JS</option>
      </select>
      <br />
      <br />
      <textarea cols="30" rows="10" placeholder="comment..."></textarea>
      <br />

      <br />

    </form>
  );
}

export default App;
