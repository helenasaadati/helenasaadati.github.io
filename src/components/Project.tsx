import React from "react";

import grafanaMonitoring from "../assets/images/grafana-monitoring.png";
import airflowPlatform from "../assets/images/airflow-platform.png";
import gitlabPipeline from "../assets/images/gitlab-pipeline.png";
import hadoopApplications from "../assets/images/hadoop-applications.png";
import hadoopDatanodes from "../assets/images/hadoop-datanodes.png";
import prometheusAlerts from "../assets/images/prometheus-alerts.png";
import zabbixDashboard from "../assets/images/zabbix-dashboard.png";

// Add these images later
import postgresqlHA from "../assets/images/postgresql-ha.png";
import redisSentinel from "../assets/images/redis-sentinel.png";
import dockerPlatform from "../assets/images/docker-platform.png";

import "../assets/styles/Project.scss";

function Project() {
    return (
        <div className="projects-container" id="projects">

            <h1>Projects I've Contributed To</h1>

            <p className="projects-intro">
                A selection of production infrastructure, observability,
                automation, and data platform projects I contributed to
                as part of DevOps and Platform Engineering teams.
            </p>

            <div className="projects-grid">

                {/* Project 1 */}

                <div className="project">
                    <img
                        src={grafanaMonitoring}
                        className="zoom"
                        alt="Enterprise Monitoring Platform"
                        width="100%"
                    />

                    <h2>Enterprise Monitoring Platform</h2>

                    <p>
                        Contributed to the development and day-to-day operation of a
                        centralized monitoring platform for production infrastructure,
                        building and maintaining dashboards and operational visibility
                        using Grafana, Prometheus, and Zabbix.
                    </p>
                </div>

                {/* Project 2 */}

                <div className="project">
                    <img
                        src={airflowPlatform}
                        className="zoom"
                        alt="Data Platform Operations"
                        width="100%"
                    />

                    <h2>Data Platform Operations</h2>

                    <p>
                        Contributed to the operation and monitoring of production data
                        platforms, supporting Apache Airflow workflows, Hadoop
                        services, and distributed data processing environments.
                    </p>
                </div>

                {/* Project 3 */}

                <div className="project">
                    <img
                        src={gitlabPipeline}
                        className="zoom"
                        alt="CI/CD Automation"
                        width="100%"
                    />

                    <h2>CI/CD Automation</h2>

                    <p>
                        Contributed to implementing and maintaining CI/CD pipelines
                        for infrastructure and application deployments using GitLab CI,
                        Docker, and automated deployment workflows.
                    </p>
                </div>

                {/* Project 4 */}

                <div className="project">
                    <img
                        src={hadoopApplications}
                        className="zoom"
                        alt="Big Data Platform"
                        width="100%"
                    />

                    <h2>Big Data Platform Operations</h2>

                    <p>
                        Supported the operation of Hadoop clusters, monitoring
                        distributed applications, resource utilization, and platform
                        health to ensure reliable data processing services.
                    </p>
                </div>

                {/* Project 5 */}

                <div className="project">
                    <img
                        src={hadoopDatanodes}
                        className="zoom"
                        alt="Storage Infrastructure"
                        width="100%"
                    />

                    <h2>Distributed Storage Infrastructure</h2>

                    <p>
                        Participated in monitoring HDFS DataNodes, storage capacity,
                        replication status, and cluster health to improve reliability
                        and operational visibility.
                    </p>
                </div>

                {/* Project 6 */}

                <div className="project">
                    <img
                        src={prometheusAlerts}
                        className="zoom"
                        alt="Alerting Platform"
                        width="100%"
                    />

                    <h2>Infrastructure Alerting</h2>

                    <p>
                        Contributed to alert design and monitoring using Prometheus,
                        helping detect infrastructure issues and reduce response time
                        for production incidents.
                    </p>
                </div>

                {/* Project 7 */}

                <div className="project">
                    <img
                        src={zabbixDashboard}
                        className="zoom"
                        alt="Infrastructure Monitoring"
                        width="100%"
                    />

                    <h2>Infrastructure Monitoring Dashboards</h2>

                    <p>
                        Built and maintained operational dashboards in Zabbix for
                        Linux servers, services, storage, and network infrastructure
                        used by production environments.
                    </p>
                </div>

                {/* Project 8 */}

                <div className="project">
                    <img
                        src={postgresqlHA}
                        className="zoom"
                        alt="PostgreSQL High Availability"
                        width="100%"
                    />

                    <h2>PostgreSQL High Availability</h2>

                    <p>
                        Contributed to deploying and maintaining highly available
                        PostgreSQL clusters, supporting replication, failover, backup,
                        and operational monitoring.
                    </p>
                </div>

                {/* Project 9 */}

                <div className="project">
                    <img
                        src={redisSentinel}
                        className="zoom"
                        alt="Redis Sentinel"
                        width="100%"
                    />

                    <h2>Redis High Availability</h2>

                    <p>
                        Assisted in deploying and operating Redis Sentinel to provide
                        automatic failover, high availability, and continuous service
                        monitoring.
                    </p>
                </div>

                {/* Project 10 */}

                <div className="project">
                    <img
                        src={dockerPlatform}
                        className="zoom"
                        alt="Container Platform"
                        width="100%"
                    />

                    <h2>Container Platform Operations</h2>

                    <p>
                        Contributed to containerized application deployments and
                        infrastructure management using Docker, supporting reliable
                        delivery across development and production environments.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Project;