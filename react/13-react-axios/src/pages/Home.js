function Home() {
  return <div className="Home">
    <h3>Home</h3>
    <br />

    <h4>Latest Posts</h4>
    <br />

    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Title 1</td>
          <td>
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Title 2</td>
          <td>
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Title 3</td>
          <td>
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <br />
    <a to="#">Add Post</a>
  </div>
}

export default Home;