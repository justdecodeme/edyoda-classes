import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const BASE_URL = "https://crudcrud.com/api/c0562b72ee9c4405a0da92b6b806177b/posts"

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(BASE_URL + "/" + postId).then(response => {
      setPost(response.data)
      console.log(response.data)
    })
  }, [])

  return <div className="PostDetails">
    <h3>Post Details</h3>
    <br />

    {post ? <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      </tbody>
    </table> : <p>Loading...</p>
    }


    <br />
    <a href="/">Back to Home Page</a>
  </div>
}

export default PostDetails;