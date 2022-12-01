import "./index.scss"

function index() {
  return <div className="products_list_page">
    <div className="content">
      <div className="left">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Unit Sold</th>
              <th>In Stock</th>
              <th>Expiry Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input id="ch1" type="checkbox" /><label htmlFor="ch1"></label></td>
              <td>Lorem Ipsum product 1</td>
              <td>1,450</td>
              <td>550</td>
              <td>28 March 2019</td>
              <td><button className="delete_btn"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            <tr>
              <td><input id="ch2" type="checkbox" /><label htmlFor="ch2"></label></td>
              <td>Lorem Ipsum product 1</td>
              <td>1,450</td>
              <td>550</td>
              <td>28 March 2019</td>
              <td><button className="delete_btn"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            <tr>
              <td><input id="ch3" type="checkbox" /><label htmlFor="ch3"></label></td>
              <td>Lorem Ipsum product 1</td>
              <td>1,450</td>
              <td>550</td>
              <td>28 March 2019</td>
              <td><button className="delete_btn"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            <tr>
              <td><input id="ch4" type="checkbox" /><label htmlFor="ch4"></label></td>
              <td>Lorem Ipsum product 1</td>
              <td>1,450</td>
              <td>550</td>
              <td>28 March 2019</td>
              <td><button className="delete_btn"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            <tr>
              <td><input id="ch5" type="checkbox" /><label htmlFor="ch5"></label></td>
              <td>Lorem Ipsum product 1</td>
              <td>1,450</td>
              <td>550</td>
              <td>28 March 2019</td>
              <td><button className="delete_btn"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
          </tbody>
        </table>
        <button className="primary_btn">Add new product</button>
        <button className="primary_btn">Delete selected products</button>
      </div>
      <div className="right">
        <h3>Product Categories</h3>
        <table>
          <tbody>
            <tr>
              <td>Product Category 1</td>
              <td><button className="delete_btn"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>Product Category 1</td>
              <td><button className="delete_btn"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>Product Category 1</td>
              <td><button className="delete_btn"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
          </tbody>
        </table>
        <button className="primary_btn">Add new categry</button>
      </div>
    </div>
  </div>;
}

export default index;