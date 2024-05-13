import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import logo from '../../media/q3-words.png'
interface Link {
  dest: string;
  name: string;
}

interface InputField {
  placeholder: string;
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

  const inputFields: InputField[] = [
    { placeholder: 'Email', name: 'user_email' },
    { placeholder: 'First Name', name: 'first_Name' },
    { placeholder: 'Last Name', name: 'last_Name' },
    { placeholder: 'Company name (if applicable)', name: 'company_Name' },
    { placeholder: 'Phone number', name: 'phone_Number' },
    { placeholder: 'Project details', name: 'project_Details' },
  ];

  const links: Link[] = [
    { dest: '/', name: 'Home' },
    { dest: '/why-us', name: 'Why Us' },
    { dest: '/about', name: 'About Us' },
  ];

  return (
    <>
      <div className='w-screen flex justify-center items-center absolute top-0 left-0'>
        <div className='text-center ml-auto'>
          <img src={logo}
          className='w-[100px]
          ml-auto mr-auto'
          />
          <h2 className='text-white text-2xl mt-5 pl-3 pr-3'>You have made an excellent choice</h2>
          <p className="w-4/5 ml-auto mr-auto">Let's get in contact so we can work together</p>
          <form onSubmit={sendEmail} ref={form}>
            <div className="mt-8 flex flex-col">
            {inputFields.map((inputField, index) => (
  index === inputFields.length - 1 ? (
    <textarea
      key={index}
      className='glow border border-blue-400 bg-black rounded-xl text-white
      focus:placeholder-gray-300 p-2 mb-3'
      placeholder={inputField.placeholder}
      name={inputField.name}
    />
  ) : (
    <input
      key={index}
      className='glow border border-blue-400 bg-black rounded-xl text-white
      focus:placeholder-gray-300 p-2 mb-3'
      type="text"
      placeholder={inputField.placeholder}
      name={inputField.name}
    />
  )
))}

            </div>
          </form>

        <p className='pl-5 pr-5 mb-5'>The laws of physics state that for every action, there
          is an equal and opposite reaction. Use this law everyday
          to create the reality you desire.
        </p>
        <button>Lets get to work</button>

        </div>
        <div className='hidden'>
          <p>this is the logo box</p>
        </div>
      </div>
    </>
  );
};

export default Booking;
