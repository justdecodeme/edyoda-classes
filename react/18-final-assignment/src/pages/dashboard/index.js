import "./index.scss"

function index() {
  return <div className="dashboard_page">
    <h2>Welcome back, Admin</h2>
    <div className="left_right">
      <div className="left wrapper_box">
        <h3>Latest Hits</h3>
      </div>
      <div className="right wrapper_box">
        <h3>Performance</h3>
      </div>
    </div>
    <div className="left_right">
      <div className="left wrapper_box">
        <h3>Storage Information</h3>
      </div>
      <div className="right wrapper_box">
        <h3>Notification List</h3>
      </div>
    </div>
    <div className="wrapper_box">
      <h3>Orders List</h3>
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
    </div>
  </div>;
}

export default index;