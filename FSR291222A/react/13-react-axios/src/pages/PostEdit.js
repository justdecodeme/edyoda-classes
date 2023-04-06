import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const BASE_URL = "https://crudcrud.com/api/c0562b72ee9c4405a0da92b6b806177b/posts"

function PostEdit() {
  const { postId } = useParams();
  const [form, setForm] = useState({ title: '', body: '' })

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  useEffect(() => {
    axios.get(BASE_URL + "/" + postId).then(response => {
      setForm({
        title: response.data.title,
        body: response.data.body
      })
      console.log(response.data)
    })
  }, [])

  const addPost = () => {
    axios.put(BASE_URL + "/" + postId, {
      title: form.title,
      body: form.body
    }).then(() => console.log('Post Updated!'))
  }

  return <div className="PostAddEdit">
    <h3>Edit Post</h3>
    <br />

    <div className="form">
      <input type="text" value={form.title} placeholder="Title..." onChange={(e) => handleChange('title', e.target.value)} />
      <br />
      <br />
      <textarea type="text" value={form.body} placeholder="Body..." onChange={(e) => handleChange('body', e.target.value)}></textarea>
      <br />
      <br />
      <button onClick={addPost} disabled={form.title === '' || form.body === ''}>Update</button>
    </div>
  </div>
}

export default PostEdit;