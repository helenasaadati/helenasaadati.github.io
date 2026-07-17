import React from "react";
import "../assets/styles/Notes.scss";

function Notes() {
    return (
        <section className="notes-container" id="notes">

            <h1>Technical Notes</h1>

            <p className="notes-intro">
                My personal knowledge base where I document useful commands,
                troubleshooting experiences, deployment notes, and DevOps
                best practices.
            </p>

            <div className="notes-grid">

                <div className="note-card">
                    <h3>🐳 Docker</h3>
                    <p>Containers, Compose, Networks, Volumes & Best Practices</p>
                </div>

                <div className="note-card">
                    <h3>☸ Kubernetes</h3>
                    <p>Pods, Deployments, Services, Helm & Troubleshooting</p>
                </div>

                <div className="note-card">
                    <h3>🖥 Zabbix</h3>
                    <p>Agent2, Templates, Triggers, Proxy & Monitoring</p>
                </div>

                <div className="note-card">
                    <h3>📊 Grafana</h3>
                    <p>Dashboards, Variables & Visualization</p>
                </div>

                <div className="note-card">
                    <h3>🐘 PostgreSQL</h3>
                    <p>Replication, Backup, Performance & HA</p>
                </div>

                <div className="note-card">
                    <h3>🔴 Redis</h3>
                    <p>Sentinel, Replication & High Availability</p>
                </div>

            </div>

        </section>
    );
}

export default Notes;