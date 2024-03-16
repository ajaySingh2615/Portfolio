import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      {/* <BsTwitter /> */}
      <a href="www.linkedin.com/in/cadt14">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/ajaySingh2615">
        <BsGithub />
      </a>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
