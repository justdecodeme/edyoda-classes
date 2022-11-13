import userPic from "./rakko.jpg";
// import "./Profile.css";
import classes from "./Profile.module.css";

function Profile() {
  return (
    <div className="profile">
      <img src={userPic} />
      <h1>Rakesh Kumar</h1>
      {/* <p className="trainer_info"> */}
      <p className={classes.trainer_info}>
        Founder & Trainer 👉 <a href="https://weball.io" target="_blank">weball.io </a>
      </p>
    </div>
  );
}

export default Profile;