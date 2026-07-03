import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDocker,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
    "Linux",
    "Docker",
    "Kubernetes",
    "GitLab CI/CD",
    "Ansible",
    "Git",
    "Python",
    "Bash"
  ];

  const labelsSecond = [
    "Grafana",
    "Zabbix",
    "Prometheus",
    "PostgreSQL",
    "Redis HA",
    "MongoDB",
    "Kafka",
    "ELK"
  ];

  const labelsThird = [
    "Airflow",
    "Hadoop",
    "Spark",
    "YARN",
    "HDFS",
    "Hive"
  ];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">

          {/* Card 1 */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>

            <p>
            Building automated deployment workflows, containerized environments and infrastructure automation for production systems.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />

            <h3>Platform Operations & Observability</h3>

            <p>
            Operating monitoring platforms, databases and highly available services with a focus on reliability, performance and observability.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />

            <h3>Data Platform Engineering</h3>

            <p>
            Supporting distributed data platforms, workflow orchestration and large-scale data processing environments.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;