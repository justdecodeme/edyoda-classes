function PostAdd() {
  return <div className="PostAddEdit">
    <h3>Add Post</h3>
    <br />

    <div className="form">
      <input type="text" placeholder="Title..." />
      <br />
      <br />
      <textarea type="text" placeholder="Body..."></textarea>
      <br />
      <br />
      <button>Add</button>
    </div>
  </div>
}

export default PostAdd;