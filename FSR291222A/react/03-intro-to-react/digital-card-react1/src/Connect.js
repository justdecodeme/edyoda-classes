import "./Connect.css";

import Icon from "./Icon"

let links = [
  {
    icon: "fab fa-instagram-square",
    url: "https://www.instagram.com/"
  },
  {
    icon: "fab fa-youtube",
    url: "https://www.youtube.com/channel/UCZwJv0F7H_lX2eb0i7Xg6HA?view_as=subscriber"
  },
  {
    icon: "fab fa-telegram",
    url: "https://t.me/joinchat/t5nf5KMkDCg0MmNl"
  },
  {
    icon: "fab fa-facebook-square",
    url: "https://www.facebook.com/justdecodeme"
  },
  {
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/justdecodeme/"
  },
  {
    icon: "fab fa-twitter",
    url: "https://twitter.com/justdecodeme"
  },
]

// return <a href={link.url} target="_blank"><i className={link.icon}></i></a>

var socialLinks = links.map((link) => {
  return <Icon href={link.url} icon={link.icon} />
})

function Connect() {
  return (
    <div className="connect">
      <h2>Let's Connect 😊</h2>
      {socialLinks}
    </div>
  );
}

export default Connect;
