import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Notes.scss";

function Notes() {
    return (
        <div className="notes-container">

            <div className="notes-header">
                <h1>Technical Notes</h1>

                <p>
                    A collection of practical notes, troubleshooting guides,
                    commands, and deployment experiences gathered while working
                    with production systems.
                </p>
            </div>

            <div className="notes-grid">

                <Link to="/notes/docker" className="note-card">
                    <h2>🐳 Docker</h2>
                    <p>
                        Docker commands, networking, volumes,
                        images, compose and troubleshooting.
                    </p>
                </Link>

                <Link to="/notes/kubernetes" className="note-card">
                    <h2>☸ Kubernetes</h2>
                    <p>
                        Pods, Deployments, Services,
                        Ingress, Helm and debugging.
                    </p>
                </Link>

                <Link to="/notes/linux" className="note-card">
                    <h2>🐧 Linux</h2>
                    <p>
                        Useful commands, networking,
                        systemd, permissions and shell tips.
                    </p>
                </Link>

                <Link to="/notes/zabbix" className="note-card">
                    <h2>📈 Zabbix</h2>
                    <p>
                        Templates, Agent2,
                        triggers and monitoring notes.
                    </p>
                </Link>

                <Link to="/notes/postgresql" className="note-card">
                    <h2>🐘 PostgreSQL</h2>
                    <p>
                        Replication, backup,
                        performance tuning and HA.
                    </p>
                </Link>

                <Link to="/notes/gitlab" className="note-card">
                    <h2>🚀 GitLab CI/CD</h2>
                    <p>
                        Pipelines, Runner,
                        deployment automation and CI/CD.
                    </p>
                </Link>

            </div>

        </div>
    );
}

export default Notes;