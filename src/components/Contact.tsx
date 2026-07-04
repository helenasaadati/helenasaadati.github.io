import React from "react";
import "../assets/styles/Contact.scss";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Open to International Opportunities</h1>

          <p className="contact-description">
            I'm currently open to DevOps, Platform Engineering, and Infrastructure
            Engineering opportunities, particularly international positions with
            visa sponsorship.
          </p>

          <p className="contact-description">
            With hands-on experience supporting production infrastructure,
            monitoring, automation, CI/CD, Linux, Docker, Kubernetes, and data
            platforms, I'd be happy to discuss how I can contribute to your
            engineering team.
          </p>

          <div className="contact-info">
          <div className="info-item">
            <span className="info-title">📧 Email</span>
            <a href="mailto:fsnm.saadati@gmail.com">
              fsnm.saadati@gmail.com
            </a>
          </div>

          <div className="info-item">
            <span className="info-title">📍 Location</span>
            <span>Tehran, Iran</span>
          </div>

          <div className="info-item">
            <span className="info-title">💼 Status</span>
            <span>Open to Relocation</span>
          </div>

          </div>

          <div className="contact-actions">
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:fsnm.saadati@gmail.com"
            >
              Email Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;