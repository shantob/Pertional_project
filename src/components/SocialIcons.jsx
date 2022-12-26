import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkwxGgCsmZGdtWkLqfNmkvfVwWfKVPKdlGXmFwPcRlfLjmPlscvzMqKwccsvvWnfQqcljx' target='blanket'>
        <span

          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <HiOutlineMail size={30} />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/shanto-bepary-276215207/"target='blanket'>
        <span

          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <FaLinkedin size={30} />
        </span>
      </a>
      <a href="https://www.facebook.com/shanto.b.353"target='blanket'>
        <span

          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <FaFacebook size={30} />
        </span>
      </a>
      <a href="https://github.com/shantob"target='blanket'>
        <span

          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <FaGithub size={30} />
        </span>
      </a>
      <a href='http://wa.me/+8801780768085' target='blanket'>
        <span

          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <FaWhatsapp size={30} />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;