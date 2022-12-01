import "./index.scss"

function index() {
  return <div className="product_add_page">
    <h3>Add product</h3>
    <div className="content">
      <div className="left">
        <label htmlFor="productName">Procut Name</label>
        <input type="text" id="productName" />
        <label htmlFor="description">Description</label>
        <textarea id="username" row="10"></textarea>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option>Select Category</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <div className="expiry_stock">
          <div className="expiry">
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" />
          </div>
          <div className="stock">
            <label htmlFor="stock">Units in stock</label>
            <input type="text" id="stock" />
          </div>
        </div>
      </div>
      <div className="right">
        <label htmlFor="productImage" className="product_image">
          <i className="fa-solid fa-cloud-arrow-up"></i>
        </label>
        <input type="file" id="productImage" />
        <button className="primary_btn">Upload product image</button>
      </div>
    </div>
    <button className="primary_btn">Login</button>
  </div>;
}

export default index;