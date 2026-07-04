import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import profile from "../assets/images/profile.jpg";

function Main() {
  return (
    <div className="container" id="about">
      <div className="about-section">

        <div className="image-wrapper">
          <img src={profile} alt="Helena Saadati" />
        </div>

        <div className="content">

          <div className="social_icons">
            <a
              href="https://github.com/helenasaadati"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/fatemeh-saadati-0b7a2a178/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <p className="intro-text">Hi, I'm</p>

          <h1>Helena Saadati</h1>

          <h2>DevOps & Platform Engineer</h2>

          <p className="about-text">
            DevOps Engineer with hands-on experience supporting production
            infrastructure, CI/CD pipelines, monitoring, automation, and
            data platforms.
          </p>

          <p className="about-text">
            Experienced with Linux, Docker, Kubernetes, GitLab CI/CD,
            Prometheus, Grafana, Zabbix, PostgreSQL, Redis, Apache Airflow,
            Hadoop, and infrastructure automation. Passionate about building
            reliable, scalable platforms and currently seeking international
            opportunities as a DevOps / Platform Engineer.
          </p>

          <div className="highlights">

            <div className="highlight-card">
              <h3>Infrastructure</h3>
              <span>Production Systems</span>
            </div>

            <div className="highlight-card">
              <h3>Automation</h3>
              <span>CI/CD & DevOps</span>
            </div>

            <div className="highlight-card">
              <h3>Available</h3>
              <span>Open to Relocation</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Main;