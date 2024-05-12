import React, {useState, useEffect, useRef,
FormEvent} from "react";
import emailjs from '@emailjs/browser'

const Contact:React.FC = () => {

    const [submitted, setSubmitted] = useState(false);
    const form = useRef<HTMLFormElement | null>(null);
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const serviceId = 'service_32u1f5x';
      const templateId = 'template_ubgz5ef';
      const userId = 'CN_-9JmkFRgjxgmrg';
  
      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
          console.log(result.text);
          setSubmitted(true);
        })
        .catch((error) => {
          console.log(error.text);
        });
    };
  
    useEffect(() => {
      // Scroll to the top when the "submitted" state changes
      if (submitted) {
        window.scrollTo(0, 0);
      }
    }, [submitted]);
  
    useEffect(() =>{
      window.scrollTo(0,0)
    })

    return (
        <section className="absolute top-0 left-0 flex
        w-screen">
           
           <div className="w-screen ">

          
            <h2 className="text-white">You have made an excellent choice</h2>
            <p>Lets get in contact so we can get you to the next level</p>
            <form onSubmit={sendEmail} ref
            </div>
            <div className="hidden">
               <h1>Logo box</h1>
            </div>
        </section>
    )
}

export default Contact