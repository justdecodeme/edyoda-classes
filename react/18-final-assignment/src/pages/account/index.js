import "./index.scss"
import userImage from "../../_assets/images/user.png"

function index() {
  return <div className="account_page">
    <div className="wrapper_box">
      <h3>List of Accounts</h3>
      <label htmlFor="accounts">Accounts</label>
      <select id="accounts">
        <option>Select account</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <div className="avatar_settings left_right">
      <div className="wrapper_box left">
        <img src={userImage} alt="User Image" className="user_image" />
        <button className="primary_btn">Upload new photo</button>
      </div>
      <div className="wrapper_box right">
        <div className="left_right">
          <div className="left">
            <label htmlFor="accountName">Account Name</label>
            <input type="text" id="accountName" />
          </div>
          <div className="right">
            <label htmlFor="accountEmail">Account Email</label>
            <input type="text" id="accountEmail" />
          </div>
        </div>
        <div className="left_right">
          <div className="left">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" />
          </div>
          <div className="right">
            <label htmlFor="passwordConfirm">Re-enter Password</label>
            <input type="text" id="passwordConfirm" />
          </div>
        </div>
        <div className="left_right">
          <div className="left">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </div>
          <div className="right">
            <label className="transparent">.</label>
            <button className="primary_btn update_profile">Update your profile</button>
          </div>
        </div>
        <button className="primary_btn">Delete your account</button>
      </div>
    </div>
  </div>;
}

export default index;