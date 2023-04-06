import axios from "axios"
import { useState } from "react"

const BASE_URL = "https://crudcrud.com/api/c0562b72ee9c4405a0da92b6b806177b/posts"

function PostAdd() {
  const [form, setForm] = useState({ title: '', body: '' })

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const addPost = () => {
    axios.post(BASE_URL, {
      title: form.title,
      body: form.body
    }).then(() => console.log('Post Added!'))
  }

  return <div className="PostAddEdit">
    <h3>Add Post</h3>
    <br />

    <div className="form">
      <input type="text" placeholder="Title..." onChange={(e) => handleChange('title', e.target.value)} />
      <br />
      <br />
      <textarea type="text" placeholder="Body..." onChange={(e) => handleChange('body', e.target.value)}></textarea>
      <br />
      <br />
      <button onClick={addPost} disabled={form.title === '' || form.body === ''}>Add</button>
    </div>
  </div>
}

export default PostAdd;