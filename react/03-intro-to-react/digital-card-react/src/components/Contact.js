import './Contact.css';

let infos = [
  {
    text: '+91 843782273',
    buttons: [
      {
        className: 'phone',
        href: 'tel:+91 8437892273',
        icon: 'fas fa-phone'
      },
      {
        className: 'whatsapp',
        href: 'https://wa.me/+918437892273',
        icon: 'fab fa-whatsapp'
      },
    ]
  },
  {
    text: 'justdecodeme@hotmail.com',
    buttons: [{
      className: 'mail',
      href: 'mailto:justdecodeme@hotmail.com',
      icon: 'fas fa-envelope'
    }]
  },
  {
    text: 'justdecode.me',
    buttons: [{
      className: 'website',
      href: 'https://justdecode.me',
      icon: 'fas fa-external-link-alt'
    }]
  },
]

function Contact() {
  return (
    <div className="contact">
      {infos.map((info, i) =>
        <div className="row" key={i}>
          <div className="left">{info.text}</div>
          <div className="right">
            {info.buttons.map((btn, j) => <a className={btn.className} href={btn.href} target="_blank" key={j}><i className={btn.icon}></i></a>)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
