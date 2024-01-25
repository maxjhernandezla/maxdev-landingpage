import './Contact.scss';
const Contact = () => {
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
            <h1>Contact us</h1>
            <div className="contentLeftAndRight">
              <div className="left">
                <p>
                  Got a project? We've got personalized solutions! Let's chat
                  and dive into the details of your case.
                </p>
              </div>
              <div className="right">
                <form className="formContainer">
                  <input
                    type="text"
                    className="input"
                    name="fullname"
                    placeholder="Fullname"
                  />
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                  />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className="message"
                    placeholder="Your message..."
                  ></textarea>
                  <button className="submitBtn">SEND!</button>
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
