import userPic from './../rakko.jpg';
import './Profile.css';


function Profile() {
  return (
    <div className="profile">
      <img src={userPic} alt="Rakesh Kumar" />
      <h1>Rakesh Kumar</h1>
      <p>
        Founder & Trainer 👉 <a href="https://weball.io" target="_blank">weball.io</a>
      </p>
    </div>
  );
}

export default Profile;
