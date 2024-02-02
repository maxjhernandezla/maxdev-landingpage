import './Contact.scss';
import { getLanguageData } from '../../helpers/languageHelper';
import React, { useRef } from 'react';
import { sendEmail } from '../../helpers/emailHelper';

const Contact = () => {
  const data = getLanguageData();

  const form = useRef();

  const handleSendEmail = async (e) => {
    e.preventDefault();
    await sendEmail(form);
  };

  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="title">
          <h1>{data.contact.title}</h1>
        </div>
      </div>

      <div className="contentContainer">
        <div className="contentLeftAndRight">
          <div className="left">
            <p>{data.contact.text}</p>
          </div>
          <div className="right">
            <form
              className="formContainer"
              ref={form}
              onSubmit={handleSendEmail}
            >
              <input
                type="text"
                className="input"
                name="user_name"
                placeholder={data.contact.fullname}
              />
              <input
                type="email"
                className="input"
                name="user_email"
                placeholder={data.contact.email}
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="input"
                placeholder={data.contact.message}
              ></textarea>
              <button type="submit" className="submitBtn">
                {data.contact.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
