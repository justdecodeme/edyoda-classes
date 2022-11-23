function PostDetails() {
  return <div className="PostDetails">
    <h3>Post Details</h3>
    <br />

    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Title</td>
          <td>Body</td>
        </tr>
      </tbody>
    </table>

    <br />
    <a href="/">Back to Home Page</a>
  </div>
}

export default PostDetails;