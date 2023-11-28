import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cujqktt', 'template_37k83vh', form.current, 'rfmiLie3_I9HQT2zo')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" id="user_name" required />

      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" required />

      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" id="subject" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required />

      <input type="submit" value="Send" />
    </form>
  );
};

export default About;
