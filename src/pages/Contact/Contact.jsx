import './Contact.scss';
import { getLanguageData } from '../../helpers/languageHelper';
const Contact = () => {
  const data = getLanguageData();

  return (
    <div className="contact">
      <div className="contactContainer">
        {/* <video
          src="https://res.cloudinary.com/maxjhernandez/video/upload/v1706220366/technology_-_112792_Original_stlfpw.mp4"
          autoPlay
          loop
          muted
        ></video> */}
        <div className="contentContainer">
          <div className="content">
            <h1>{data.contact.title}</h1>
            <div className="contentLeftAndRight">
              <div className="left">
                <p>{data.contact.text}</p>
              </div>
              <div className="right">
                <form className="formContainer">
                  <input
                    type="text"
                    className="input"
                    name="fullname"
                    placeholder={data.contact.fullname}
                  />
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder={data.contact.email}
                  />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className="message"
                    placeholder={data.contact.message}
                  ></textarea>
                  <button className="submitBtn">{data.contact.button}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
