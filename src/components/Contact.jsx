import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('shantobepary717', 'template_etjunmr', form.current, '61h0ee8mslASwTTCP')
      .then((result) => {
        console.log(result.text);
        swal({
          title: "Good job!",
          text: "Massage sent!",
          icon: "success",
        });
      }, (error) => {
        console.log(error.text);
        swal({
          title: "ERROR!",
          text: (error.text),
          icon: "warning",
        });
      });
  };

  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f] flex justify-center items-center p-4 sm:pb-5'>

      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an Email</p>
        </div>
        <input className='bg-[#ccd6f6] p-2 ' type="text" placeholder='Name' name='user_name' required/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='user_email'required />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
        <input type="submit" value="Send Massage" className='text-white border-2 rounded-md cursor-pointer hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
        />
      </form>

    </div>
  )
}

export default Contact;
