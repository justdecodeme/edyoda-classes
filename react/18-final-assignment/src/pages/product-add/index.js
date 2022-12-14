import "./index.scss"

function Index() {
  return <div className="product_add_page wrapper_box">
    <h3>Add product</h3>
    <div className="left_right">
      <div className="left">
        <label htmlFor="productName">Procut Name</label>
        <input type="text" id="productName" />
        <label htmlFor="description">Description</label>
        <textarea id="description" row="10"></textarea>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option>Select Category</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <div className="left_right">
          <div className="left">
            <label htmlFor="expiry">Expiry Date</label>
            <input type="date" id="expiry" />
          </div>
          <div className="right">
            <label htmlFor="stock">Units in stock</label>
            <input type="number" id="stock" />
          </div>
        </div>
      </div>
      <div className="right product">
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

export default Index;