import { useEffect, useState, useRef } from "react";
import Error from "./Error"

const SKILLS = ['html', 'css', 'sass', 'js', 'react'];
const FAV_TOPIC = ['html', 'css', 'js'];
const RATING = ['awesome', 'good', 'average', 'notHappy', 'sad',];

let initForm = {
  username: '',
  phoneNumber: '',
  email: '',
  skills: new Array(SKILLS.length).fill(false),
  rating: '',
  favTopic: '',
}

// if username or phoneNumber is empty
//   > isValid = false
// if username & phoneNumber both are filled
//   > isValid = true

function App() {
  const [formData, setFormData] = useState(initForm)
  const [error, setError] = useState(null)
  const [isValid, setIsValid] = useState(true)
  const formEl = useRef(null);

  const handSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.skill)
  }

  const handleChange = (key, value) => {
    console.log(formEl.current);
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
    } else if (key === "skills") {
      value = formData.skills.map((skill, i) => i === value ? !skill : skill);
    } else if (key === "favTopic") {
      console.log(key, value)
    }

    setFormData({
      ...formData,
      [key]: value
    })
  }

  useEffect(() => {
    if (formData.username === "" || formData.phoneNumber === "") {
      // setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [formData])

  return (
    <form className="App" ref={formEl} onSubmit={handSubmit}>
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
        {SKILLS.map((ch, i) => <p key={i}>
          <input type="checkbox" name="skillS" id={ch} checked={formData.skills[i]} onChange={() => handleChange("skills", i)} />
          <label htmlFor={ch}>{ch}</label>
        </p>)}
      </div>
      <div>
        <h2>Rating (FED)</h2>
        {RATING.map((rd, i) => <p key={i}>
          <input type="radio" name="rating" id={rd} checked={rd === formData.rating} onChange={() => handleChange("rating", rd)} />
          <label htmlFor={rd}>{rd}</label>
        </p>)}
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
      <select name="favTopic" onChange={(e) => handleChange("favTopic", e.target.value)} >
        {FAV_TOPIC.map((topic, i) => <option key={i} selected={topic === formData.favTopic} value={topic}>{topic}</option>)}
      </select>
      <br />
      <br />
      <textarea cols="30" rows="10" placeholder="comment..."></textarea>
    </form>
  );
}

export default App;
