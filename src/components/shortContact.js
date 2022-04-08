import React from "react";
import "./shortContact.css";

const shortContact = () => {
  return (
    <div className="shortContact">
      <div className="contact_info">
        <span>
          <i class="fa-solid fa-envelope"></i>
          :Email:info@example.com |
        </span>
        <span>
          <i class="fa-solid fa-phone"> </i>:Call at +91 9897112345
        </span>
      </div>
      <div className="social_handles">
        <span>
          <i class="fa-brands fa-facebook-f"></i>
        </span>
        <span>
          <i class="fa-brands fa-instagram"></i>
        </span>
        <span>
          <i class="fa-brands fa-twitter"></i>
        </span>
      </div>
    </div>
  );
};

export default shortContact;
