import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeaderScroll = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ayodeji-adebayo-34706a19b/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsLinkedin />
      </a>
      <a
        href="https://app.netlify.com/teams/ayodeji0/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <SiNetlify />
      </a>
      <a
        href="https://github.com/lummy-star/lummy-store"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderScroll
