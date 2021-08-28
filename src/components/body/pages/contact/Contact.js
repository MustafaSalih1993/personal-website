import "./Contact.css";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">You Can Find Me On:</div>
      <div className="contact-box">
        <div className="contact-item">
          <a href="mailto:mustafasalih1991@gmail.com">
            <AiOutlineMail></AiOutlineMail>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/mustafasalih1993">
            <AiOutlineGithub></AiOutlineGithub>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.instagram.com/code.mu/">
            <AiOutlineInstagram></AiOutlineInstagram>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
