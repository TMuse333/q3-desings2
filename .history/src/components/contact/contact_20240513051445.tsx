import React, { useState, useRef, useEffect } from 'react';

import emailjs from '@emailjs/browser';



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
     
            <div className=''>
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
                    </form>
                    </div>

                  </>
  );
};

export default Booking;