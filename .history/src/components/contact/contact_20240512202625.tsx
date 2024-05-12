import React, { useState, useRef, useEffect } from 'react';
import './booking.css';
import emailjs from '@emailjs/browser';
import Navbar from '../navbar/navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

interface Link {
  dest: string;
  name: string;
}

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(true);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_32u1f5x';
    const templateId = 'template_ubgz5ef';
    const userId = 'CN_-9JmkFRgjxgmrg';

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
          console.log(result.text);
          setSubmitted(true);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  useEffect(() => {
    // Scroll to the top when the "submitted" state changes
    if (submitted) {
      window.scrollTo(0, 0);
    }
  }, [submitted]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const links: Link[] = [
    {
      dest: '/',
      name: 'Home',
    },
    {
      dest: '/why-us',
      name: 'Why Us',
    },
    {
      dest: '/about',
      name: 'About Us',
    },
 
  ];

  return (
    <>
      {/* <Navbar links={links} /> */}

      <div className="booking-container">
        <div className="booking-contents">
          <div className="small">
            <div className="le-box">
            
              <h1 className="title-text booking-title"></h1>
              {submitted ? (
                <div className='submitted-container'
                style={{ height: '100vh' }}>
                  <p className="description-text">Thank you for your service! We'll get in touch with you shortly.</p>
                  <Link to='/'>

 
                  <button className="button">Home</button>
                  </Link>
                </div>
              ) : (
                <>
                  <p className="booking-p">Let's get in contact so we can work together</p>
                  <form onSubmit={sendEmail} ref={form}>
                    <div className="info-box-container">
                      <input type="email" placeholder="Email" name="user_email" />
                      <input type="text" placeholder="First Name" name="first_Name" />
                      <input type="text" placeholder="Last Name" name="last_Name" />
                      <input type="text" placeholder="Company name (if applicable)" name="company_Name" />
                      <input type="text" placeholder="Phone number" name="phone_Number" />
                      <input type="text" placeholder="Project details" name="project_Details" />
                    </div>

              

                    <button className="button submit-button" type="submit">
                      Submit request
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="big">
          {/* <img src={nobg} alt="nobg" /> */}
          <h2 className="title-text">Dolce Vita</h2>
       
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Booking;
