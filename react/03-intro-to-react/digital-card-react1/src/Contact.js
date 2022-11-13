import classes from "./Contact.module.css";

let infos = [
  {
    text: "+91 843782273",
    buttons: [
      {
        className: "phone",
        href: "tel:+91 8437892273",
        icon: "fas fa-phone"
      },
      {
        className: "whatsapp",
        href: "https://wa.me/+918437892273",
        icon: "fab fa-whatsapp"
      },
    ]
  },
  {
    text: "justdecodeme@hotmail.com",
    buttons: [
      {
        className: "mail",
        href: "mailto:justdecodeme@hotmail.com",
        icon: "far fa-envelope"
      }
    ]
  },
  {
    text: "justdecode.me",
    buttons: [
      {
        className: "website",
        href: "https://justdecode.me",
        icon: "fas fa-external-link-alt"
      }
    ]
  },
]

function Contact() {
  return (
    <div className="contact">
      {infos.map((info) => {
        return <div className="row">
          <div className={classes.left}>{info.text}</div>
          <div className="right">
            {info.buttons.map((btn) => {
              return <a className={btn.className} href={btn.href} target="_blank"><i class={btn.icon}></i></a>
            })}
          </div>
        </div>
      })}
      <p className="trainer_info">
        Founder & Trainer 👉 <a href="https://weball.io" target="_blank">weball.io </a>
      </p>
    </div>
  );
}

export default Contact;
