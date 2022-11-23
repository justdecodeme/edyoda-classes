function PostEdit() {
  return <div className="PostAddEdit">
    <h3>Edit Post</h3>
    <br />

    <div className="form">
      <input type="text" placeholder="Title..." />
      <br />
      <br />
      <textarea type="text" placeholder="Body..."></textarea>
      <br />
      <br />
      <button>Update</button>

    </div>
  </div>
}

export default PostEdit;