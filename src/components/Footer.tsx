import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/helenasaadati" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/helena-saadati-0b7a2a178/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© 2026 Helena Saadati</p>

      <p className="footer-role">
        DevOps • Platform Engineer • Infrastructure
      </p>
    </footer>
  );
}

export default Footer;