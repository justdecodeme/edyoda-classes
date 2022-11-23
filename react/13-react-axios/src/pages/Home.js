import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
const BASE_URL = "https://crudcrud.com/api/1234/posts"

function Home() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  /* fetch api data only once */
  useEffect(() => {
    axios.get(BASE_URL).then(response => {
      setError(null)
      setPosts(response.data)
      console.log(response.data)
    }).catch(error => setError(error.message))
  }, [])

  const deletePost = (postId) => {
    // delete post from api
    if (window.confirm("Do you really want to delete?")) {
      axios.delete(BASE_URL + "/" + postId).then(() => {
        axios.get(BASE_URL).then(response => {
          setPosts(response.data)
        })
        console.log("Post Deleted!")
      })
    }
  }

  return <div className="Home">
    <h3>Home</h3>
    <br />

    <h4>Latest Posts</h4>
    <br />

    {error ? <p className="error">{error}</p> : <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts && posts.map((post, i) => <tr key={post._id}>
          <td>{i + 1}</td>
          <td>{post.title}</td>
          <td>
            <button onClick={() => navigate("/post/details/" + post._id)}>View</button>
            <button onClick={() => navigate("/post/edit/" + post._id)}>Edit</button>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </td>
        </tr>
        )}

      </tbody>
    </table>}


    <br />
    <a href="#">Add Post</a>
  </div>
}

export default Home;