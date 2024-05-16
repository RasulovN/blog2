import React, { useRef } from 'react';
import { Footer } from 'flowbite-react';
import { Label, TextInput, Textarea,  Button, Card, Tooltip} from 'flowbite-react';
import emailjs from '@emailjs/browser';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';   
import { useTranslation } from 'react-i18next';
import { FaTelegramPlane  } from "react-icons/fa";
import { FaPhoneAlt  } from "react-icons/fa";
import { BsMessenger  } from "react-icons/bs";
import { BsFacebook, BsInstagram, BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';

import '../components/css/styles.css'
// import ContactCard from '../components/about/AboutCard';
// import Call from '../components/contact/Call';
import {toast} from 'react-toastify'

export default function Contact() {
  const [t, i18n] = useTranslation("global");
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
  .sendForm('service_647lgmt', 'template_80o28oa', form.current, {
    publicKey: '2CXZFhqOyVF-jBkPp',
  })
  .then(
    () => {
        showAlert('success', 'Info alert!', 'Change a few things up and try submitting again.')
        alert('send success')
        toast.dark('send success')
    },
    (error) => {
      console.log('FAILED...', error.text);
      errorAlert('failure', 'Error alert!', 'An error occurred. Please try again.');
    }
  );
};
const showAlert = (color, title, message) => {
    return (
    <Alert color="info">
    <span className="font-medium">{title}</span> {message}
  </Alert>
    );
  };
const errorAlert = (color, title, message) => {
    return (
    <Alert color="failure" icon={HiInformationCircle}>
    <span className="font-medium">{title}</span> {message}
  </Alert>
    );
  };
  const content = (
    <div className="w-30 text-sm  text-center">
        <div >
         <a href="tel:+998330033953" 
         title="+998 (33) 003-39-53"
         className='rounded-full m-2 w-10 h-10 text-center flex justify-center items-center bg-white text-base font-medium text-green-700'> 
         <FaPhoneAlt   className='flex w-10 h-10 m-3'/>
         </a>
        </div>
        <div >
          <a href="https://t.me/rasulovdev" 
          title="Telegram"
          className='rounded-full m-2 w-10 h-10 text-center flex justify-center items-center bg-white text-base font-medium text-blue-700'>
            <FaTelegramPlane   className='flex w-10 h-10 m-3'/></a>
        </div>
    </div>
  );
  return (
    <div className='justify-center items-center min-h-screen'  style={{ position: 'relative', zIndex: '1' }}>
         {/* <h1 className='text-3xl font font-semibold text-center my-7'>{t("contact.contact_h1")}</h1> */}
     {/* <div className='min-h-screen max-w-2xl  mx-auto flex justify-center items-center flex-col gap-6 p-3'> */}
       {/* <ContactCard /> */}
     {/* </div> */}

     {/* map */}
     <div className='max-w-6xl mx-auto p-3 text-center '>
          <h1 className='text-3xl font font-semibold  my-7'>
            {t("contact.contact_h1")}
          </h1>
          <div className='mapcard flex flex-col sm:flex-row p-3 justify-center items-center text-center border'>
          <div className='map w-full border'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49717.86286363524!2d65.76468819296217!3d38.84696850681645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea63944a8e4c1%3A0x694369ac2037509d!2sQarshi%2C%20Qashqadaryo%20Region!5e0!3m2!1sen!2s!4v1712151950963!5m2!1sen!2s" 
                      // className='w-full'
                      width={"100%"}
                      height="450" 
                      styles="border:0;"
                      loading="lazy" 
                      aria-hidden="false"
                      tabIndex="0" />
          </div>
            <div className='m-10 flex-row w-full'>
           <h3>{t("contact.mapCard_info")}.</h3>
           <div>
            <h3>Contact us</h3>
            <div className='text-left'>
               <p><span>Phone: &#x1F4F1;</span><a href="tel:">+998330093953</a></p>
               <p><span>Email: &#x1F4E7; </span><a href="mailto:nurbekrasulov71@gmail.com">nurbekrasulov71@gmail.com</a></p>
               <p><span>Addreess: </span> <a href="https://maps.google.com/maps?ll=38.858254,65.791798&z=12&t=m&hl=en&gl=US&mapclient=embed&q=Qarshi%20Qashqadaryo%20Region" className='text-blue-700'>Kashkadarya region Karshi city</a></p>
            </div>
           </div>
           <div className='flex flex-col m-3 '>
           <h3 className='m-3 text-center'>{t("contact.mapCard_socail")} </h3>
           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center text-lg p-3">
            <Footer.Icon href='https://facebook.com/rasulovdev' target='blank' icon={BsFacebook}/>
            <Footer.Icon href='https://instagram.com/rasulovdev' target='blank' icon={BsInstagram}/>
            <Footer.Icon href='https://t.me/rasulovdev' target='blank' icon={BsTelegram}/>
            <Footer.Icon href='https://instagram.com/the_rasulov1' target='blank' icon={BsInstagram}/>
            <Footer.Icon href='https://github.com/RasulovN' target='blank' icon={BsGithub}/>
            <Footer.Icon href='https://linkdin.com/rasulovdev' target='blank' icon={BsLinkedin}/>

          </div>
           </div>
            </div>

          </div>
        </div>

     <h1 className='text-3xl font font-semibold text-center my-7'>{t("contact.contact_h1_sub")}</h1>
     <div className='min-h-screen max-w-2xl mx-auto  justify-center items-center flex-col gap-6 p-3'>
     <Card className="max-w-md">
      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="user_name" value={t("contact.contact_form.input_name")}  name="user_name"/>
          </div>
          <TextInput id="user_name" type="text" placeholder="Bonnie Green" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value={t("contact.contact_form.input_email")} />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" name="user_email" required />
        </div>
          <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="message" value={t("contact.contact_form.input_messages")} />
                </div>
                <Textarea id="message" name='message' placeholder="Leave a message..." required rows={4} />
            </div>
        <Button type="submit">{t("contact.contact_form.form_submit")}</Button>
      </form>
    </Card>
     {/* <div className="flex max-w-md flex-col gap-4">
    </div> */}
     </div>
   
    <div className="phone p-3">
        <div className='phon w-10 h-10 m-3 flex fixed right-3 bottom-20 cursor-pointer' >
          <Tooltip content={content} trigger="click" style={{ background: 'none' }}>
              <BsMessenger  />
            </Tooltip>
        </div>
       </div>

    </div>
  )
}

